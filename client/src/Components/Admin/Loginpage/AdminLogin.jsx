import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        setErrorMessage("");

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/admin/login`,
          {
            username,
            password,
          }
        );

        //console.log(response.data.message);

        localStorage.setItem("jwt_token", response.data.token);

        navigate("/mainpage");
      } catch (error) {
        setErrorMessage(
          error.response ? error.response.data.message : "An error occurred."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card shadow-lg border-0 rounded-3">
          <div className="card-body p-4" style={{ backgroundColor: "#f8f9fa" }}>
            <h4 className="card-title text-center mb-4 text-dark">
              ADMIN LOGIN
            </h4>

            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  } shadow-sm`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  autoFocus
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  } shadow-sm`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-warning w-100 shadow-sm"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Login"}
              </button>
             
            </form>
            <button className="btn btn-secondary w-100 shadow-sm mt-3" onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
