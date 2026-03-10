import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
// import Experience from "../Components/Experience/Experience";
import Hobbies from "../Components/Hobbies/Hobbies";
import Cop from "../Components/Cop";


const Home = () => {
 
  return (

    <div className="home">
      <Hero />
      <About />
      {/* <Experience/> */}
      <Hobbies/>
      <Contact />
      {/* <Cop/> */}
    </div>
  );
};

export default Home;
