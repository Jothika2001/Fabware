import React from "react";
import { useLocation } from "react-router-dom";
import images from "../../../assets/images";
import SimilarProduct from "./SimilarProduct";
import { Container, Row, Col } from "react-bootstrap";
import "./SimilarProducts.css";

function SimilarProducts() {
  const SimilarProductData = [
    {
      image: images.toiletPaper,
      name: "Toilet Paper Holder for Bathroom ACCESSORIES. Bathroom Organizer Tissue Paper Holder (ABS Plastic SELF Adhesive Toilet Paper Holder with Cover)",
      link: "/products/toilet-paper-holder",
      cost: "495",
      review:"800+",
      rating: 4.3,
    },
    {
      image: images.roller,
      name: "Lint Remover for Clothes - Sticky Lint Roller for Clothes, Furniture, Wool, Fur, Coat, Car Seats, Fabric, Dust Cleaner, Pet Hair Remover with 1 Handle, 4 Refills Total 240 Sheets & 1 Cover",
      link: "/products/lint-roller",
      cost: "521",
      review:"1k+",
      rating: 4.3,
    },
    {
      image: images.waterBottle,
      name: "Insulated thermos water bottle 650 mL screw lid, double wall vacuum stainless steel BPA free sweat free & leak proof retains temperature hot for 12 hours or cold for 24 hours - Black",
      link: "/products/water-bottle",
      cost: "846",
      review:"1.2k+",
      rating: 4.3,
    },
  ];


  const location = useLocation();

  const isProductPage = location.pathname.startsWith("/products");

  return (
    <div className="similar-products mt-5">
      {isProductPage && (
        <div className="banner-container position-relative">
          <img
            src={images.productbanner}
            alt="Product Banner"
            className="img-fluid banner-img"
            style={{ maxHeight: "380px", width: "100%" }}
          />
          <h2
            className="banner-heading position-absolute bottom-0 start-0 mb-3 ms-3 text-white"
            style={{ fontSize: "7vw" }}
          >
            Products
          </h2>
        </div>
      )}
      {!isProductPage && (
        <div className="d-block d-lg-none">
          <h2 className="text-danger" style={{ textAlign: "center" }}>
            <b>O U R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P R O D U C T S</b>
          </h2>
        </div>
      )}

      <Container fluid>
        <hr
          style={{
            width: "216px",
            border: "none",
            background: "#ee3c4d",
            margin: "20px auto",
          }}
        />
        <Row
          className="d-flex justify-content-center"
          style={{
            gap: "70px",
            height: "100%",
            minHeight: "500px",
            padding: "15px",
          }}
        >
          {SimilarProductData.map((data, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 d-flex"
              style={{
                backgroundColor: "#dfe0e2",
                minHeight: isProductPage ? "550px" : "50px",
              }}
            >
              <SimilarProduct data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SimilarProducts;
