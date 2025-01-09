import styled from "styled-components"; // Import styled-components
import DescriptionHero from "../../DescriptionPage/DescriptionHero/DescriptionHero";
import Discover from "../../DescriptionPage/Discover/Discover";
import ProductDescription from "../../DescriptionPage/ProductDescription/ProductDescription";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import images from "../../../assets/images";


 // Styled component
 const DescriptionHeroWrapper = styled.div`
 margin-top: 70px;

    @media screen and (max-width: 462px) {
   .description-hero {
     margin-top: 140px;
     margin-bottom:700px;
   }
 }
 @media screen and (min-width: 768px) and (max-width: 1125px) {
   .main {
     margin-top: 100px;
   }
   @media screen and (max-width: 768px) {
     .delivery {
       max-width: 582px;
       min-height: 150px;
       top: 818px;
       left: 778px;
       padding: 17px;
       margin-top: 20px;
       gap: 21px;
       border-radius: 8px;
       border: 1px 0px 0px 0px;
       opacity: 0px;
       border: 1px solid #e4e4e4;
       display: flex;
       flex-direction: column;
       height: auto;
     }
     .cost {
       margin-top: 20px;
     }
   }
   .price-review {
     margin-top: 20px;
     width: 100%;
   }
 }
`;


function Roller() {

  const rollerData = {
    name: "FABWARE Lint Remover for Clothes",
    desc: "Sticky Lint Roller for Clothes, Furniture, Wool, Fur, Coat, Car Seats, Fabric, Dust Cleaner, Pet Hair Remover with 1 Handle, 4 Refills Total 240 Sheets & 1 Cover",
    productImages: {
      main: images.DescriptionMainImage,
      other: {
        img1: images.DescriptionOtherImage1,
        img2: images.DescriptionOtherImage2,
        img3: images.DescriptionOtherImage3,
        img4: images.DescriptionOtherImage4,
      },
    },
    sizeAvailable: true,
    link: "https://amzn.in/d/aBJxyB3",
    cost: "549",
    strikeCost: "996",
    starRate:"4.2",
    reviews:"1k+",
    description: [
      "THE PERFECT ASSISTANT FOR YOUR FAMILY: Fabware Lint roller is perfect for picking up dust, dirt, lint and removing pet hair. It makes swift work of picking up life's tiny messes when you don't feel like getting the vacuum out. The sticky and easily removable sheets will save you tons of time and energy. Instantly pick up dirt even from your most delicate things. Spend no more than a second to effortlessly replace sheets.",
      "PREMIUM LINT ROLLER VALUE PACK: Fabware Lint rollers features compact, lightweight & ergonomic non-slip handle design with extra sticky and easy peeling rolls. The ergonomic designed ABS handle provides a comfortable grip and high durability. Diagonal mark sheets makes it easy to tear off used sheets. 4 Refills and 1 Handle Total 240 sheets in one package with great value.",
      "MULTIFUNCTION-USE: Fabware lint remover will serve as a perfect assistant in your everyday life and makes your life easy. It can tackle everything from curtains to car seats, and anything in between. Effectively remove lint, dog hair, cat hair, pet hair, fur, fuzz, human hair, dandruff, dust, snack food residue, from clothing, bedspreads, blanket, carpets, upholstery, and car seats. Perfect for the bedroom, furniture, laundry room, vehicles, appliances etc.",
      "EASY TO CARRY: Fabware Lint rollers are portable and travel friendly. This cloth cleaning roller will easily fit in your handbag or your car's glove compartment so you always look presentable on the go. Keep your fabrics lint-free, especially in the office, at business meetings or while traveling. Easy to carry and using fur remover from clothes at any time when traveling with pets.",
      "RISK-FREE PURCHASE: We are so confident that you will think we have the best lint roller for cloth in the market. Offering the greatest customer service is what we strive to do daily. If you have any concerns, please do not hesitate to contact us and we will do whatever we can to help. Click 'ADD TO CART' now and get this Fabware Lint remover Roller & Pet Hair remover from clothes and home today!"
    ],
  };

 
  return (
    <>
      <Header />
      <DescriptionHeroWrapper>
        <DescriptionHero data={rollerData} />
      </DescriptionHeroWrapper>
      <ProductDescription data={rollerData}/>
      <Discover />
      <Footer />
    </>
  );
}

export default Roller;
