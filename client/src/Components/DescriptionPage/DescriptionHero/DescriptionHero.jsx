import PropTypes from "prop-types";
import images from "../../../assets/images";
import { useState } from "react";
import "./DescriptionHero.css";

function DescriptionHero({ data, style }) {
  const [mainImage, setMainImage] = useState(data?.productImages?.main);

  if (!data) {
    return <p>No product data available.</p>;
  }

  const { productImages, name, desc, cost, strikeCost, starRate, reviews } = data;
  const otherImages = Object.values(productImages.other);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleNextImage = () => {
    const currentIndex = otherImages.indexOf(mainImage);
    if (currentIndex < otherImages.length - 1) {
      setMainImage(otherImages[currentIndex + 1]);
    } else {
      setMainImage(otherImages[0]); 
    }
  };

  const handlePrevImage = () => {
    const currentIndex = otherImages.indexOf(mainImage);
    if (currentIndex > 0) {
      setMainImage(otherImages[currentIndex - 1]);
    } else {
      setMainImage(otherImages[otherImages.length - 1]); 
    }
  };

  return (
    <div className="description-hero" style={style}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row justify-content-center main" style={{gap:"50px"}}>
          {/* Column 1 - Image Section */}
          <div className="col-12 col-md-5 d-flex flex-column align-items-center mt-3">
            <div className="row">
              {/* Main Image */}
              <div className="col-12 mb-2">
                <img
                  src={mainImage}
                  alt={name}
                  className="img-fluid image1  roller-image1"
                  style={{ maxHeight:"462px", width: "100%" }}
                />
              </div>

              {/* Other Images with Clickable Thumbnails */}
              <div className="col-12 click">
                <div className="d-flex justify-content-between">
                  <img
                    src={images.leftArrow}
                    alt="Left Arrow"
                    className="left-arrow"
                    onClick={handlePrevImage}
                    style={{ cursor: "pointer" }}
                  />
                  <div className="d-flex flex-wrap justify-content-center thumb-sec">
                    {otherImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="img-fluid mt-2 thumbnail-images"
                        style={{
                          cursor: "pointer",
                          marginRight: "5px",
                          width: "100px",
                          height: "100px",
                          border: "2px solid black",
                          borderRadius: "5px",
                        }}
                        onClick={() => handleImageClick(image)}
                      />
                    ))}
                  </div>
                  <img
                    src={images.arrow}
                    alt="Right Arrow"
                    className="right-arrow"
                    onClick={handleNextImage}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Description, Price, and Other Info */}
          <div className="col-12 col-md-6 price-info" style={{marginTop:"20px"}}>
            <div className="description-hero-desc mx-1" style={{ width: "100%" }}>
              {/* Breadcrumbs */}
              <div className="desc-path">
                <a href="/" style={{ textDecoration: "none" }}>
                  Home
                </a>
                <img src={images.arrow} alt="" className="mx-2" />
                <a href="/products" style={{ textDecoration: "none" }}>
                  All Products
                </a>
                <img src={images.arrow} alt="" className="mx-2" />
                <a
                  href="/"
                  className="black-desc"
                  style={{ textDecoration: "none" }}
                >
                  {name}
                </a>
              </div>

              <div className="desc-title mt-4 d-flex flex-wrap justify-content-between align-items-center">
                {/* Product Title and Description */}
                <div className="desc-name">
                  <h2>{name}</h2>
                  <p>{desc}</p>
                </div>
              </div>

              {/* Price and Reviews */}
              <div className="price-card mt-5">
                <div className="cost">
                  <h2>Rs. {cost}</h2>
                  <h4>Rs. {strikeCost}</h4>
                </div>
                <div className="price-review">
                  <div className="top">
                  <p className="reviews-top">
                      <img src={images.star} alt="" />
                      {starRate}
                    </p>
                    <p className="reviews-bottom">
                      <img src={images.message} alt="" />
                      {reviews} Reviews
                    </p>
                  </div>
                  <p className="recommended mt-2">
                    <span>93%</span> of buyers have recommended this.
                  </p>
                </div>
              </div>

              {/* Size Options */}
              {data.sizeAvailable && (
                <div className="sizes-container d-flex flex-wrap mt-4">
                  <div className="size-title">
                    <h5>
                      <b>Choose a Size: 1 handle + 60 sheets</b>
                    </h5>
                  </div>
                  <div className="sizes row" style={{ gap: "30px" }}>
                    <div className="col-5">
                      <div className="size-card">
                        <h2>1 handle + 60 sheets</h2>
                        <h4>$230</h4>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="size-card">
                        <h2>1 handle + 240 sheets</h2>
                        <h4>$230</h4>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="size-card">
                        <h2>2 handle + 480 sheets</h2>
                        <h4>$230</h4>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="size-card">
                        <h2>4 refills + 240 sheets</h2>
                        <h4>$230</h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Buy Button */}
              <div className="buy-button mt-4 mx-2">
              <a href={data.link} style={{ textDecoration: "none" }}>
                <button className="text-light"  style={{maxWidth:"380px", width:"100%"}}>
                 
                    <img src={images.bag} alt="" />Proceed to Buy
                 
                </button>
                </a>
              </div>

              {/* Delivery Info */}
              <div className="delivery mt-4 mx-2">
                <div className="delivery-card">
                  <img src={images.truck} alt="" />
                  <div>
                    <h4>Free Delivery</h4>
                    <p>Free delivery for all over India</p>
                  </div>
                </div>
                <div className="delivery-card">
                  <img src={images.blackBag} alt="" />
                  <div>
                    <h4>Return Delivery</h4>
                    <p>Eligible to return</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DescriptionHero.propTypes = {
  data: PropTypes.shape({
    productImages: PropTypes.shape({
      main: PropTypes.string.isRequired,
      other: PropTypes.shape({
        img1: PropTypes.string.isRequired,
        img2: PropTypes.string.isRequired,
        img3: PropTypes.string.isRequired,
        img4: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    strikeCost: PropTypes.string.isRequired,
    sizeAvailable: PropTypes.bool,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default DescriptionHero;
