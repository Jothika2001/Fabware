import { Link } from "react-router-dom";
import images from "../../assets/images";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <Header />

      <div style={{ marginTop: "80px" }}>
        <div className="row align-items-center mx-1 mt-5">
          {/* Left Column (Text) */}
          <div className="col-md-6 col-12">
            <h2 className="fs-1 mt-5">
              <b>Welcome to Uberfy</b>
            </h2>
            <p className="fs-5 mt-5 mx-3 heading-para">
              At Uberfy, our goal is to bring you premium, high-quality home,
              kitchen, and lifestyle products that enhance and elevate your
              everyday living. Founded in 2019, we began with a focus on lint
              roller products. Despite the challenges of the COVID-19 pandemic,
              we persevered and continued to innovate. In 2023, we expanded our
              product range to include water bottles and toilet paper holders,
              further enhancing our commitment to providing high-quality,
              practical solutions for your home and lifestyle.
            </p>
            <p className="fs-5 mx-3 heading-para">
              We are dedicated to transforming your lifestyle through excellence
              and innovation in every product we offer.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="col-md-6 col-12 mt-4">
            <img
              src={images.aboutBottom}
              alt="About Us"
              className="img-fluid"
            />
          </div>
        </div>
        {/* Why Choose Us Section */}
        <div
          className=" justify-content-center w-100 mt-5"
          style={{ backgroundColor: "#6b67671c" }}
        >
          <div className="">
            <div className="p-4 text-center mt-5">
              <h3>Why Choose Us?</h3>
              <p className="fs-5 mt-5 mb-4 mx-1 heading-para">
                What sets Uberfy apart is our unwavering dedication to quality
                and affordability. We take pride in curating products that blend
                style, functionality, and durability while remaining
                cost-effective. Our commitment to excellence is reflected in our
                rigorous product testing process: we test our products multiple
                times to ensure they meet our high standards. We only introduce
                designs to our collection once we are fully satisfied with their
                performance, durability, and overall quality. This meticulous
                approach guarantees that you receive products that are not only
                functional but also dependable and well-crafted.
              </p>
            </div>
          </div>
        </div>
        {/* Mission and Vision Cards */}
        <div className="container mt-5" style={{ marginBottom: "100px" }}>
          <div
            className="row justify-content-center mt-5 mb-5"
            style={{ gap: "70px" }}
          >
            {/* Mission Card */}
            <div className="col-md-5 col-12 mb-5">
              <div className="card d-flex h-100 border-0 shadow-lg mt-5 ">
                <div className="card-body">
                  <h3 className="card-title about-title text-center mt-2">
                    <b>Our Mission</b>
                  </h3>
                  <p className="card-text heading-para about-text fs-5 mt-4 mb-3 mx-4">
                    Our mission is to improve your lifestyle by providing
                    high-quality home, kitchen, and lifestyle products at the
                    most affordable price possible. We specialize in a curated
                    selection of practical and innovative products, including
                    high-quality water bottles, efficient toilet accessories,
                    and versatile lifestyle accessories. We believe that
                    exceptional quality should be accessible to everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="col-md-5 col-12 mb-5">
              <div className="card d-flex h-100 border-0 shadow-lg mt-5">
                <div className="card-body">
                  <h3 className="card-title about-title text-center mt-2">
                    <b>Our Vision</b>
                  </h3>
                  <p className="card-text heading-para about-text fs-5 mt-4 mb-3 mx-4">
                    We envision a world where every product you use in your home
                    and daily life represents not only exceptional quality and
                    sophistication but also great value. By setting new
                    standards in these areas, we aim to enrich your experiences
                    and make your living space a true reflection of your style
                    and needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div
          className="get-in-touch bg-image text-light py-5 mt-5 fs-5"
          style={{
            backgroundImage: `url(${images.Rectangle8})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container text-center">
            <h3>
              <b>Get in Touch</b>
            </h3>
            <p className="mt-4 heading-para">
              We’d love to hear from you! Whether you have a question, need
              assistance, or want to learn more about our products, feel free to
              reach out to us at <strong>[email address]</strong> or call us at{" "}
              <strong>[phone number]</strong>. Let’s connect and discover how
              Uberfy can elevate your home and lifestyle.
            </p>
            <p className="heading-para heading-para">
              Thank you for choosing Uberfy. We look forward to being a part of
              your journey to a more stylish and enjoyable life!
            </p>
            <Link to="/contact" className="btn about-btn btn-danger mt-3">
              Send Message
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
