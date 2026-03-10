import React, {useState,useEffect} from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts/AllProducts";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Navbar from "./Components/Navbar";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from "./Components/ScrollToTop";
const App = () => {
 
    
    
  return (
    <div className="app">
      <ToastContainer/>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/services" element={<Services/>}/>
        </Routes>
        <Footer/>
    </div>
  );
};

export default App;
