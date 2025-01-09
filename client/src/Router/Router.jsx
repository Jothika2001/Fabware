import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../Components/ContactPage/Contact";
import SimilarProducts from "../Components/DescriptionPage/SimilarProducts/SimilarProducts";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Roller from "../Components/Products/Roller/Roller";
import WaterBottle from "../Components/Products/WaterBottle/WaterBottle";
import ToiletPaper from "../Components/Products/ToiletPaper/ToiletPaper";
import AboutUs from "../Components/AboutUs/AboutUs";
import FAQ from "../Components/FAQ/FAQ";
import FeedbackForm from "../Components/FeedbackForm/FeedbackForm";
import AdminLogin from "../Components/Admin/Loginpage/AdminLogin";
import Mainpage from "../Components/Admin/Mainpage/Mainpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: (
      <>
        <Header />
        <SimilarProducts />
        <Footer />
      </>
    ),
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/products/lint-roller",
    element: <Roller />,
  },
  {
    path: "/products/toilet-paper-holder",
    element: <ToiletPaper />,
  },
  {
    path: "/products/water-bottle",
    element: <WaterBottle />,
  },
  {
    path: "/feedbackform",
    element: <FeedbackForm />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/mainpage",
    element: <Mainpage />,
  },
]);

export default router;
