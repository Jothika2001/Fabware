import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleDownload = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const token = localStorage.getItem("jwt_token");

      if (!token) {
        setErrorMessage("You are not authenticated.");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/download-feedback`,
        {
          headers: {
            Authorization: `${token}`,
          },
          responseType: "blob",
        }
      );

      //console.log("Response Status:", response.status);
      //console.log("Response Data:", response.data);

      if (response.status === 200 && response.data instanceof Blob) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement("a");
        a.href = url;
        a.setAttribute("download", "feedback_data.xlsx");
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
      } else {
        setErrorMessage(
          "Failed to fetch the file. Response was not a valid Blob."
        );
      }
    } catch (error) {
      //console.error("Download error:", error);
      setErrorMessage("Error occurred while downloading the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center">
      <h1 className="text-center mb-4">Hello Admin</h1>

      <div className="justify-content-start align-items-center">
        <h4>Export the reward form</h4>

        <button
          className="btn btn-warning"
          onClick={handleDownload}
          disabled={loading}
        >
          {loading ? "Downloading..." : "Download"}
        </button>

        {errorMessage && (
          <div className="alert alert-danger mt-3">{errorMessage}</div>
        )}

        <button className="btn btn-secondary mx-3" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Mainpage;
