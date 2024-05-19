import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeaderMain from "../components/HeaderMain/HeaderMain";
import Footer from "../components/Footer/Footer";
import PeopleComponent from "../components/PeopleComponent/PeopleComponent";
import NewsletterSubscription from "../components/NewsletterSubscription/NewsletterSubscription";

const Writer = () => {
  return (
    <div>
      <Navbar />
      <HeaderMain />
      <PeopleComponent />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Writer;
