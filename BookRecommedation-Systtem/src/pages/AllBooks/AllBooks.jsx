import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BookList from "../../components/BookList/BookList";
import Footer from "../../components/Footer/Footer";

const AllBooks = () => {
  return (
    <div>
      <Navbar />
      <BookList />
      <Footer />
    </div>
  );
};

export default AllBooks;
