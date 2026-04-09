import React, { useEffect, useState } from "react";
import Navabar from "../common/Navabar";
import Banner from "../common/Banner";
import Products from "../Products/Product";
import Cart from "../Cart/Cart";

const Home = () => {
  const [searchTerms, setSearchTerms] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", changeNavbar);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("product-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* Navbar */}
      <Navabar
        handleScroll={handleScroll}
        setSearchTerms={setSearchTerms}
        isScrolled={isScrolled}
      />

      {/* Banner */}
      <Banner />

      {/* product */}
      <Products searchTerms={searchTerms} />

      {/* Cart */}
      <Cart />
    </>
  );
};

export default Home;
