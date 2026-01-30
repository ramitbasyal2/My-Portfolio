import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact/Contact";
import Navbar from "../Components/Navbar";
import Experience from "../Components/Experience/Experience";

const Home = () => {
 
  const [mode,setMode] = useState("dark-mode")
  
 useEffect(()=>{
      document.querySelector("body").className = mode;
 },[mode])

  return (

    <div className="home">
      <Navbar mode={mode} setMode={setMode} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience/>
      <Contact />
    </div>
  );
};

export default Home;
