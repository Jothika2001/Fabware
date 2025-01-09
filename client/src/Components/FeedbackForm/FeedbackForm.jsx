import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

const FeedbackForm = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    rewardOption: "Lint Roller",
    image: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  // Email validation regex
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.rewardOption) newErrors.rewardOption = "Please select a reward option";
    if (!formData.image) newErrors.image = "Image is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); 
      return;
    }

    // Create FormData object to send multipart data
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("phoneNumber", formData.phoneNumber);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("rewardOption", formData.rewardOption);
    formDataToSubmit.append("image", formData.image);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/submit-feedback`, {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Feedback submitted successfully:", data);
        setIsSubmitted(true);
      } else {
        console.error("Error submitting feedback:", data.message);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }

    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      rewardOption: "Lint Roller",
      image: null,
    });
  };

  const handleClose = () => {
    setIsSubmitted(false); 
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          Congratulations,
          <br /> You are selected for the Reward ✨
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="feedback-form-container">
          {isSubmitted ? (
            <div className="thank-you-message">
              <h2 className="text-center mb-4">Thank you for submitting your feedback!</h2>
              <p className="text-center">We appreciate your time and input. We'll process your reward shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="feedback-form">
              {/* Name */}
              <Row className="mb-4">
                <Col xs={12} sm={6}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                  </div>
                </Col>

                {/* Phone Number */}
                <Col xs={12} sm={6}>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                  </div>
                </Col>
              </Row>

              {/* Email */}
              <Row className="mb-4">
                <Col xs={12}>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </div>
                </Col>
              </Row>

              {/* Reward Option */}
              <Row className="mb-4">
                <Col xs={12}>
                  <div className="form-group">
                    <label htmlFor="rewardOption">Reward Option:</label>
                    <select
                      id="rewardOption"
                      name="rewardOption"
                      value={formData.rewardOption}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Lint Roller">Lint Roller</option>
                      <option value="Toilet Paper Holder">Toilet Paper Holder</option>
                      <option value="Water Bottle">Water Bottle</option>
                      <option value="Self Adhesive Toilet Roll Paper Holder">
                        Self Adhesive Toilet Roll Paper Holder
                      </option>
                    </select>
                    {errors.rewardOption && <div className="text-danger">{errors.rewardOption}</div>}
                  </div>
                </Col>
              </Row>

              {/* Image Upload */}
              <Row className="mb-4">
                <Col xs={12}>
                  <div className="form-group">
                    <label htmlFor="image">Upload Image:</label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="form-control"
                    />
                    {errors.image && <div className="text-danger">{errors.image}</div>}
                  </div>
                </Col>
              </Row>

              {/* Submit Button */}
              <Row className="mb-3">
                <Col xs={12} className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-warning"
                    style={{ maxWidth: "250px", padding: "12px 20px" }}
                  >
                    Submit
                  </button>
                </Col>
              </Row>
            </form>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FeedbackForm;
