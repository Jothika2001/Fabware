import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import images from "../../assets/images";
import "./Testimonials.css";

function Testimonials() {
  const testimonialData = [
    {
      image: images.person1,
      name: "Pragati",
      how: "Useful Product",
      date: "Reviewed in India on 26 July 2024",
      size: "Size : 1 HANDLE + 60 SHEETS",
      rating: 5,
      img: images.removerbanner,
      review:
        "lint remover is very useful product,It remove dust, fur, dander, hair,fuzz easily, this makes life soo easier, Works well for all clothes. The adhesion is good. Easy to use and very handy for taking on trips when compared to the electronic alternatives.",
    },
    {
      name: "Anoop",
      how: "Best in the category",
      date: "Reviewed in India on 26 July 2024",
      size: "Size : 2 HANDLE + 480 SHEETS",
      image: images.person2,
      rating: 5,
      review: "Very good like 3M at better price.",
    },
    {
      name: "AGM",
      how: "Good Quality Product",
      date: "Reviewed in India on 1 September 2024",
      size: "ABS TOILET PAPER HOLDER WITH MOBILE STAND",
      image: images.person5,
      img: images.holderbanner,
      rating: 5,
      review:
        "Writing review after using it for more than 15 days. The product quality is very good. The sticker Glue is very strong and holding it very firmly. Very good option for those who don't want to drill and nail.",
    },
    {
      name: "Ankita Singh",
      how: "Best",
      date: "Reviewed in India on 18 February 2024",
      image: images.person4,
      img: images.bottelbanner,
      rating: 5,
      review:
        "The water bottle is really good quality and easy to carry. It keeps both hot and cold water for long hours. Better than plastic bottles. Some of my friends wanted same bottle after seeing the bottle :)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialData.length]);

  return (
    <>
      <div className="testimonials">
        <div className="testimonial-title">
          <h3>
            <hr /> Testimonials
          </h3>
          <h2>
            Our <span>Happy</span> Customers
          </h2>
        </div>
        <div className="testimonial-content">
          <div className="testimonial-paragraph container">
            <h3>Trusted by 20,000+ People</h3>
            <p>
              FABWARE is committed to enhancing your everyday life with
              high-quality, innovative products that combine convenience,
              durability, and style.
            </p>
          </div>

          <div className="testimonial-card-container mx-4">
            <TestimonialCard
              key={currentIndex}
              {...testimonialData[currentIndex]}
            />
          </div>

          <div className="testimonial-image">
            <img
              src={images.girl}
              alt=""
              className="img-fluid"
              style={{
                maxWidth: "348px",
                minHeight: "480px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
