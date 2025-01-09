import DescriptionHero from "../../DescriptionPage/DescriptionHero/DescriptionHero";
import Discover from "../../DescriptionPage/Discover/Discover";
import ProductDescription from "../../DescriptionPage/ProductDescription/ProductDescription";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import images from "../../../assets/images";

function ToiletPaper() {
  const tissuePaperData = {
    name: "FABWARE Toilet Paper Holder",
    desc: "Bathroom ACCESSORIES, Bathroom Organizer Tissue Paper Holder (ABS Plastic SELF Adhesive Toilet Paper Holder with Cover)",
    productImages: {
      main: images.DescriptionMainImage2,
      other: {
        img1: images.DescriptionOtherImage12,
        img2: images.DescriptionOtherImage22,
        img3: images.DescriptionOtherImage32,
        img4: images.DescriptionOtherImage42,
      },
    },
    sizeAvailable: false,
    link: "https://amzn.in/d/6HKeKI2",
    cost: "534",
    strikeCost:"793",
    starRate:"4.3",
    reviews:"800+",
    description:  [
      "EASY INSTALLATION WITH SELF-ADHESIVE STICKER - Our toilet paper holder can be easily installed without drilling or damaging your walls, thanks to its self-adhesive sticker.",
    "DURABLE AND STURDY - Made from high-quality materials, our toilet paper holder is built to last and can hold up to two rolls of toilet paper at once.",
    "SPACE-SAVING DESIGN - Our toilet paper holder is designed to maximize space in your bathroom, making it the perfect solution for small bathrooms or powder rooms.",
    "VERSATILE AND FUNCTIONAL - Our toilet paper holder can be used in a variety of settings, including homes, apartments, RVs, and more.",
    "KEYWORDS: TOILET PAPER HOLDER, SELF-ADHESIVE STICKER, DURABLE, SPACE-SAVING, VERSATILE - Our toilet paper holder includes all the high search keywords you need to find the perfect solution for your bathroom needs."
  ],
  };

  return (
    <>
      <Header />
      <DescriptionHero data={tissuePaperData} />
      <ProductDescription data={tissuePaperData} />
      <Discover />
      <Footer />
    </>
  );
}

export default ToiletPaper;
