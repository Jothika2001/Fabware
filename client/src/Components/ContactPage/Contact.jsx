// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import images from "../../assets/images.js";
// import Footer from "../Footer/Footer.jsx";
// import Header from "../Header/Header.jsx";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [messageSent, setMessageSent] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Send email via EmailJS
//     emailjs
//       .send(
//         import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
//         formData,
//         import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
//       )

//       .then(
//         (response) => {
//           console.log("Email sent successfully", response);
//           setMessageSent(true);
//           setFormData({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           console.error("Error sending email:", error);
//         }
//       )
//       .finally(() => {
//         setIsSubmitting(false);
//       });
//   };

//   return (
//     <>
//       <div className="contact">
//         <Header />

//         <div className="ContactUs justify-content-center">
//           <img
//             src={images.Contact}
//             alt="Contact Us"
//             className="img-fluid contactus"
//           />
//         </div>

//         <div className="middle">
//           <div>
//             <h2>We would love to hear from you.</h2>
//             <p style={{ marginBottom: "20px" }}>
//               If you have any query or any type of suggestion, you can contact
//               us here. We would love to hear from you.
//             </p>

//             <form onSubmit={handleSubmit}>
//               <div className="content">
//                 <div>
//                   <p>Name</p>
//                   <input
//                     type="text"
//                     className="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <p>Email</p>
//                   <input
//                     type="email"
//                     className="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="mm" style={{ marginTop: "10px" }}>
//                 <p>Message</p>
//                 <input
//                   type="text"
//                   className="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                 />
//               </div>

//               <button type="submit" className="send" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : "SEND MESSAGE"}
//               </button>
//             </form>

//             {messageSent && (
//               <div className="success-message">
//                 <p>Your message has been sent successfully!</p>
//               </div>
//             )}
//           </div>

//           <div>
//             <div className="visit">
//               <h3 style={{ marginBottom: "10px" }}>Visit Us</h3>
//               <p>Fabware, Tamilnadu, India</p>
//               <p>Phone: +91 9940557013</p>
//             </div>

//             <div className="line">
//               <h3 style={{ marginBottom: "5px" }}>Get In Touch</h3>
//               <p>You can get in touch with us on this provided email.</p>
//               <p>Email: uberfyservices@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Contact;



import React, { useState } from "react";
import emailjs from "emailjs-com";
import images from "../../assets/images.js";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState(""); // For phone validation

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validate phone number format
  const validatePhoneNumber = (phoneNumber) => {
    
    //const phoneRegex = /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,3}\)?[\s-]?)?[\d\s-]{7,15}$/;
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    } else {
      setErrorMessage(""); 
    }

    // Validate phone number
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setPhoneErrorMessage("Please enter a valid phone number.");
      return;
    } else {
      setPhoneErrorMessage(""); // Clear phone error if valid
    }

    setIsSubmitting(true);

    // Send email via EmailJS
    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setMessageSent(true);
          setFormData({ name: "", email: "", phoneNumber: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="contact">
        <Header />

        <div className="ContactUs justify-content-center">
          <img
            src={images.Contact}
            alt="Contact Us"
            className="img-fluid contactus"
          />
        </div>

        <div className="middle">
          <div>
            <h2>We would love to hear from you.</h2>
            <p style={{ marginBottom: "20px" }}>
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear from you.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="content d-flex">
                <div>
                  <p>Name</p>
                  <input
                    type="text"
                    className="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <p>Email</p>
                  <input
                    type="email"
                    className="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
               
              </div>
              <div className="mt-3">
                  <p>Phone Number</p> {/* New phone number field */}
                  <input
                    type="number"
                    className="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

              <div className="mm" style={{ marginTop: "10px" }}>
                <p>Message</p>
                <input
                  type="text"
                  className="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="send" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>

            {/* Display error messages if validation fails */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {phoneErrorMessage && <div className="error-message">{phoneErrorMessage}</div>}

            {messageSent && (
              <div className="success-message">
                <p>Your message has been sent successfully!</p>
              </div>
            )}
          </div>

          <div>
            <div className="visit">
              <h3 style={{ marginBottom: "10px" }}>Visit Us</h3>
              <p>Fabware, Tamilnadu, India</p>
              <p>Phone: +91 9940557013</p>
            </div>

            <div className="line">
              <h3 style={{ marginBottom: "5px" }}>Get In Touch</h3>
              <p>You can get in touch with us on this provided email.</p>
              <p>Email: uberfyservices@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
