import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BookProduct from "../components/BookProduct/BookProduct";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import NewsletterSubscription from "../components/NewsletterSubscription/NewsletterSubscription";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <BookProduct />
      <ReviewSection />
      <ReadBooks />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default ProductPage;
