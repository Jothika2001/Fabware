import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DescriptionHero from "./DescriptionHero/DescriptionHero";
import Discover from "./Discover/Discover";
import ProductDescription from "./ProductDescription/ProductDescription";

function DescriptionPage() {
  return (
    <>
      <Header />
      <DescriptionHero />
      <ProductDescription />
      <Discover /> 
      <Footer />
    </>
  );
}

export default DescriptionPage;
