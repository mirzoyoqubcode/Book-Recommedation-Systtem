import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NewsletterSubscription from "../components/NewsletterSubscription/NewsletterSubscription";
import SettingsForm from "../components/SettingsForm/SettingsForm";
const Statistic = () => {
  return (
    <div>
      <Navbar />
      <SettingsForm />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Statistic;
