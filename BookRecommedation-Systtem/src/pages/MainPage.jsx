import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeaderMain from "../components/HeaderMain/HeaderMain";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import Footer from "../components/Footer/Footer";
import ReviewSection from "../components/ReviewSection/ReviewSection";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderMain />
      <ReadBooks />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default MainPage;
