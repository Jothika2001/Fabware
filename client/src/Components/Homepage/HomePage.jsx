import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SimilarProducts from "../DescriptionPage/SimilarProducts/SimilarProducts";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import Services from "../Services/Services";
import Hero from "../Hero/Hero";
import Use from "../Use/Use";

function Homepage() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <Hero /> 
      <Services />
      <SimilarProducts />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Homepage;
