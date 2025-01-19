import images from "../../../assets/images";
import React from "react";

function SimilarProduct({ data }) {
  // Define the number of stars based on the `data.rating` (could be 4, 5, etc.)
  const totalStars = 5; // The maximum number of stars
  const rating = data.rating || 5; // Use the rating from props, default to 5 if not provided
  const stars = Array(rating).fill(images.yellowStar); // Create filled stars
  const emptyStars = Array(totalStars - rating).fill(images.greyStar); // Create empty stars
  const allStars = [...stars, ...emptyStars]; // Combine filled and empty stars
  
  const isProductPage = location.pathname.startsWith("/products");

  return (
    <a
      href={data.link}
      className="similar-link"
      style={{ textDecoration: "none" }}
    >
      <div
        className="similar-product-card d-flex flex-column justify-content-between"
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="card-img d-flex justify-content-center align-items-center p-2"
          style={{ maxWidth: "100%" }}
        >
          <img
            src={data.image}
            alt={data.name}
            className="img-fluid"
            style={{
              height: "244px",
              width: "100%",
              padding: "10px",
            }}
          />
        </div>

        {/* Product description and ratings */}
        <div
          className="similar-product-desc d-flex flex-column justify-content-between p-3"
          style={{ flexGrow: 1 }}
        >
          {/* Flex container for product description and rating */}
          <div
            className="d-flex justify-content-between align-items-start"
            style={{ gap: "15px", flexWrap: "wrap" }}
          >
            <div style={{ flex: "1" }}>
              <p
                className="main-desc text-dark mb-0"
                style={{
                  marginBottom: "10px",
                  fontSize: "1rem",
                  lineHeight: "1.2",
                }}
              >
                {data.name}
              </p>
            </div>
            <div className="rating d-flex flex-column align-items-start">
              {/* Stars */}
              <div className="d-flex">
              {allStars.map((star, index) => (
                  <img
                    src={star}
                    key={index}
                    style={{
                      width: "auto",
                      height: "19px",
                      marginRight: "5px",
                    }}
                  />
                ))}
              </div>
              {/* Reviews below the stars */}
              <p
                className="text-dark mb-0"
                style={{ marginTop: "5px", fontSize: "0.875rem" }}
              >
                ({data.review}) Reviews
              </p>
            </div>
          </div>

          {/* Flex container for cost and "Almost Sold Out" */}
          {isProductPage && (
            <div
              className="d-flex justify-content-between align-items-center w-100 mt-3 mb-5"
              style={{ flexWrap: "wrap" }}
            >
              <h4 className="text-success mb-0" style={{ fontSize: "1.25rem" }}>
                Rs. {data.cost}
              </h4>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export default SimilarProduct;

// import images from "../../../assets/images";
// import React from "react";

// function SimilarProduct({ data }) {
//   const totalStars = 5; 
//   let rating = data.rating || 5; 

//   rating = Math.round(rating * 2) / 2; 

//   const fullStars = Math.floor(rating); 
//   const hasHalfStar = rating % 1 !== 0; 
//   const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); 

 
//   const stars = Array(fullStars).fill(images.yellowStar); 
//   const halfStar = hasHalfStar ? [images.yellowStar] : []; 
//   const emptyStarsArray = Array(emptyStars).fill(images.yellowStar); 

//   const allStars = [...stars, ...halfStar, ...emptyStarsArray]; 

//   const isProductPage = location.pathname.startsWith("/products");

//   return (
//     <a href={data.link} className="similar-link" style={{ textDecoration: "none" }}>
//       <div className="similar-product-card d-flex flex-column justify-content-between">
//         <div className="card-img d-flex justify-content-center align-items-center p-2">
//           <img
//             src={data.image}
//             alt={data.name}
//             className="img-fluid"
//             style={{
//               height: "244px",
//               width: "100%",
//               padding: "10px",
//             }}
//           />
//         </div>

//         {/* Product description and ratings */}
//         <div className="similar-product-desc d-flex flex-column justify-content-between p-3">
//           <div className="d-flex justify-content-between align-items-start" style={{ gap: "15px", flexWrap: "wrap" }}>
//             <div style={{ flex: "1" }}>
//               <p className="main-desc text-dark mb-0" style={{ marginBottom: "10px", fontSize: "1rem", lineHeight: "1.2" }}>
//                 {data.name}
//               </p>
//             </div>
//             <div className="rating d-flex flex-column align-items-start">
//               {/* Stars */}
//               <div className="d-flex">
//                 {allStars.map((star, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       width: "19px",
//                       height: "19px",
//                       marginRight: "5px",
//                       backgroundImage: `url(${star})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       // For half stars, clip the yellow part (50%)
//                       clipPath: hasHalfStar && index === fullStars ? "inset(0 50% 0 0)" : "none",
//                       // For empty stars, make them look "empty"
//                       backgroundColor: index >= fullStars + (hasHalfStar ? 1 : 0) ? "rgba(0, 0, 0, 0.2)" : "none", 
//                     }}
//                     alt="star"
//                   />
//                 ))}
//               </div>
//               {/* Reviews below the stars */}
//               <p className="text-dark mb-0" style={{ marginTop: "5px", fontSize: "0.875rem" }}>
//                 ({data.review}) Reviews
//               </p>
//             </div>
//           </div>

//           {isProductPage && (
//             <div className="d-flex justify-content-between align-items-center w-100 mt-3 mb-5">
//               <h4 className="text-success mb-0" style={{ fontSize: "1.25rem" }}>
//                 Rs. {data.cost}
//               </h4>
//             </div>
//           )}
//         </div>
//       </div>
//     </a>
//   );
// }

// export default SimilarProduct;
