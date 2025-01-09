import React from "react";
import images from "../../assets/images";
import "./Testimonials.css";
import { CgProfile } from "react-icons/cg";

function TestimonialCard(data) {
  // Define the number of stars based on the `data.rating` (could be 4, 5, etc.)
  const totalStars = 5; // The maximum number of stars
  const rating = data.rating || 5; // Use the rating from props, default to 5 if not provided
  const stars = Array(rating).fill(images.yellowStar); // Create filled stars
  const emptyStars = Array(totalStars - rating).fill(images.greyStar); // Create empty stars
  const allStars = [...stars, ...emptyStars]; // Combine filled and empty stars
  
  return (
    <>
      <div
        className="bg-light mx-auto my-4 p-4"
        style={{
          maxWidth: "600px",
          minHeight: "400px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="d-flex align-items-center mb-3">
          <CgProfile
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "15px",
              backgroundColor: "#8783832e",
            }}
          />
          <h5 className="mb-0">{data.name}</h5>
        </div>

        {/* Star Rating and Review Details */}
        <div className="mb-2" style={{ color: "grey" }}>
          <div className="d-flex align-items-center mb-2">
            {allStars.map((star, index) => (
              <img
                src={star}
                key={index}
                style={{ width: "18px", marginRight: "3px" }}
              />
            ))}
          </div>
          <p>{data.how}</p>
        </div>

        {/* Date and Purchase Details */}
        <div className="mb-3" style={{ color: "grey" }}>
          <div className="d-flex align-items-center">
            {/* Show size if available */}
            {data.size && <div>{data.size}</div>}
          </div>
          <h5 className="text-warning">Verified Purchase</h5>
        </div>

        {/* Review and Image */}
        <div
          className="reviews-image"
          style={{
            width: "500px",
            overflowWrap: "break-word",
            wordWrap: "break-word",
          }}
        >
          <p style={{ color: "grey", fontStyle: "italic" }}>
            "{data.review}"
          </p>
          {data.img && (
            <img
              src={data.img}
              alt="Product"
              style={{
                height: "110px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
