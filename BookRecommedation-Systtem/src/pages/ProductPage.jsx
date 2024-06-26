import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BookProduct from "../components/BookProduct/BookProduct";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import NewsletterSubscription from "../components/NewsletterSubscription/NewsletterSubscription";
import RelatedBooks from "../components/RelatedBooks/RelatedBooks";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <BookProduct />
      <ReviewSection />
      <RelatedBooks />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default ProductPage;
