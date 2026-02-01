import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Experience from "../Components/Experience/Experience";

const Home = () => {
 
  return (

    <div className="home">
      <Hero />
      <About />
      <Experience/>
      <Contact />
    </div>
  );
};

export default Home;
