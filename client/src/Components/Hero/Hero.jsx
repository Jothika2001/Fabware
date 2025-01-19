import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import images from "../../assets/images";
import { Carousel } from "react-bootstrap";
import "./Hero.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="hero container-fluid">
      <Carousel interval={2000} controls={true} indicators={true}>
        {/* First Banner */}
        <Carousel.Item>
          <div className="hero-content">
            <div className="row align-items-center main-elevate">
              <div style={{ position: "relative" }}>
                <img
                  src={images.firstbanner}
                  className="mt-5"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <a href="https://www.amazon.in/stores/Fabware/page/68C2D03C-1D28-4D81-908A-2CF03AE35B84?ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto" target="blank">
                  <button
                    className="btn first-start-button text-dark"
                    style={{
                      position: "absolute",
                      top: "70%",
                      left: "5%",
                      zIndex: 1,
                      fontSize: "1.2rem",
                      backgroundColor: "#ffbf00",
                    }}
                  >
                    Start Shopping ↗
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Second Banner */}
        <Carousel.Item>
          <div className="hero-content">
            <div className="row align-items-center main-elevate">
              <div style={{ position: "relative" }}>
                <img
                  src={images.secondbanner}
                  className="mt-5"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <button
                  className="btn start-button text-dark"
                  onClick={openModal}
                  style={{
                    position: "absolute",
                    top: "70%",
                    left: "5%",
                    zIndex: 1,
                    fontSize: "1.2rem",
                    backgroundColor: "#ffbf00",
                  }}
                >
                  Claim Reward ↗
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <FeedbackForm showModal={showModal} closeModal={closeModal} />
    </div>
  );
}

export default Hero;
