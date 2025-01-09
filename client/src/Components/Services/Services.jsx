import React from "react";
import "./Services.css";
import images from "../../assets/images";

const Services = () => {
  return (
    <div className="services">
      <div className="bg-image"></div>

      <div className="cc">
        <div className="header">
          <div>
            <hr
              className="hr-service"
              style={{
                width: "50px",
                height: "3px",
                backgroundColor: "#4171B2",
                border: "none",
                marginTop: "50px",
              }}
            />
          </div>
          <div className="row text-center our-service mb-4">
            <div className="col-auto">
              <h3>O U R</h3>
            </div>
            <div className="col-auto">
              <h3>S E R V I C E</h3>
            </div>
          </div>
        </div>

        <h1
          className="text-center text-white my-4 provider"
          style={{ fontFamily: "Lato", fontSize: "52px" }}
        >
          <b>WHAT WE PROVIDE?</b>
        </h1>

        {/* Bootstrap Grid for Responsive Layout */}
        <div className="container full-row">
          <div
            className="row text-center rowing"
            style={{ gap: "0px", marginTop: "100px" }}
          >
            {/* Service Card 1 */}
            <div className="col-md-4 mb-4 cards">
              <div className="service-card d-flex flex-column h-100 text-dark">
                <img
                  src={images.sIcon1}
                  alt="Installation"
                  className="img-fluid mx-auto"
                />
                <h2 className="h4">Built to Last</h2>
                <p className="mt-5">
                  Durable, high-quality products designed to withstand everyday
                  wear and tear.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="col-md-4 mb-4 cards">
              <div className="service-card d-flex flex-column h-100 text-white bg-primary">
                <img
                  src={images.sIcon2}
                  alt="Thermos"
                  className="img-fluid mx-auto"
                />
                <h2 className="h4">Versatile Solutions</h2>
                <p className="text-light mt-5">
                  Thoughtfully crafted essentials that blend functionality with
                  modern style.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="col-md-4 mb-4 cards">
              <div className="service-card d-flex flex-column h-100 text-dark">
                <img
                  src={images.sIcon3}
                  alt="Lint Roller"
                  className="img-fluid mx-auto"
                />
                <h2 className="h4">Quality at the Best Price</h2>
                <p className="mt-4 mt-sm-4">
                  Delivering premium performance and reliability without
                  breaking the bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
