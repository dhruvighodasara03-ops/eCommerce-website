import React, { useEffect, useState } from "react";
import Navabar from "../common/Navabar";
import Banner from "../common/Banner";
import Products from "../Products/Product";

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
      <Navabar
        handleScroll={handleScroll}
        setSearchTerms={setSearchTerms}
        isScrolled={isScrolled}
      />
      <Banner />
      <Products searchTerms={searchTerms} />
    </>
  );
};

export default Home;
