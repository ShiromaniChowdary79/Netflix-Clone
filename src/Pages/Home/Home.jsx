import React from "react";
import "../Home/HomeStyles.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Trailer from "./Components/Trailer"
import Banner from "./Components/Banner";
import Childrens from "./Components/Childrens"
import Terms from "./Components/Terms";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Trailer/>
      <Banner/>
     <Childrens/>
      <Terms/>
      <Footer/>
    </div>
  );
};

export default Home;
