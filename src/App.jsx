import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts/AllProducts";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div className="app select-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
        <Footer/>
    </div>
  );
};

export default App;
