import DescriptionHero from "../../DescriptionPage/DescriptionHero/DescriptionHero";
import Discover from "../../DescriptionPage/Discover/Discover";
import ProductDescription from "../../DescriptionPage/ProductDescription/ProductDescription";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import images from "../../../assets/images";

function WaterBottle() {
  const waterBottleData = {
    name: "FABWARE Insulated thermos water bottle",
    desc: "FABWARE Insulated thermos water bottle 1000 mL flip lid, double wall vaccum stainless steel BPA free sweat free & leak proof retains temperature hot for 12 hours or cold for 24 hours - Black",
    productImages: {
      main: images.DescriptionMainImage1,
      other: {
        img1: images.DescriptionOtherImage11,
        img2: images.DescriptionOtherImage21,
        img3: images.DescriptionOtherImage31,
        img4: images.DescriptionOtherImage41,
      },
    },
    sizeAvailable: false,
    link: "https://amzn.in/d/bxo2BVi",
    cost: "846",
    strikeCost:"1699",
    starRate:"4.3",
    reviews:"1.2k+",
    description:["Stay hydrated all day long with Fabware insulated water bottle that keeps drinks cold for up to 24 hours or hot for up to 12 hours - perfect for outdoor activities or daily use!",
      "The flip can design allows for easy one-handed drinking on-the-go, so you can stay hydrated no matter where your adventures take you.",
      "Made with durable stainless steel and BPA-free materials, our water bottle is built to last and safe for drinking - so you can enjoy your favorite beverages without any worries.",
      "The wide mouth opening makes it easy to add ice cubes or clean the bottle, so you can enjoy your drinks just the way you like them.",
      "With its sleek and stylish design, our insulated water bottle is the perfect accessory for any outdoor activity or daily use - and it makes a great gift too!",
      "Introducing our premium fabware insulated thermos water bottle, designed to keep your beverages at the perfect temperature for hours on end. Made from high-quality stainless steel, this vacuum-insulated bottle is double-walled to provide superior insulation and prevent condensation from forming on the outside. Whether you're looking to keep your drinks hot or cold, this thermal water bottle has got you covered. Its eco-friendly design makes it the perfect choice for those looking to reduce their environmental impact, while its leak-proof construction ensures that your drinks stay put no matter where you take them. Plus, with its BPA-free construction, you can rest assured that your beverages are safe and healthy to drink. Ideal for travel, outdoor activities, or simply staying hydrated throughout the day, this insulated water bottle is a must-have for anyone on the go"
    ]
  };

  return (
    <>
      <Header />
      <DescriptionHero data={waterBottleData} />
      <ProductDescription  data={waterBottleData}/>
      <Discover />
      <Footer />
    </>
  );
}

export default WaterBottle;
