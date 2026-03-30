import React from "react";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <motion.div
      className="w-full "
      initial={{ opacity: 0, y: 100}}
      whileInView={{opacity: 1,y: 0}}
      transition={{ duration: 0.8}}
      viewport={{once: true}}
      >
      
     <div className="max-w-7xl mx-auto flex items-center justify-center flex-col text-center px-6 md:px-12 lg:px-24 max-sm:py-20 py-30">
      
      <div className="mt-12 max-sm:text-5xl sm:text-8xl md:text-[110px] lg:text-[130px] font-bold">
        <h1> ฿ Ʉ ł Ⱡ ₮</h1>
        <h1 className="text-blue-800">₮Ø ฿ɄłⱠĐ</h1>
      </div>
      <div className="mt-16 max-sm:mt-6 md:w-2xl lg:w-3xl">
        <p className="text-neutral-500 max-sm:text-xl text-sm">
       <span className="bg-linear-to-r from-indigo-500 to-yellow-500 bg-clip-text text-transparent 
       font-medium uppercase text-xl"> Hey there! Myself Ramit Basyal a Frontend developer.</span> <br /> 
       I enjoy building fast, interactive web experiences with a focus on design and performance.
        Most of my work is around React, and modern web technologies.


        </p>
      </div>
      <div className="flex items-center justify-center mt-10 max-sm:mt-8 gap-3 md:gap-4">
        <button className=" text-black cursor-pointer  border border-neutral-700 font-bold max-sm:px-2 px-4 md:px-8 py-3
         max-sm:py-3 md:text-xl md:py-3 text-xs rounded-xl  hover:bg-[#d1d1d190] bg-linear-to-r from-indigo-700 to-pink-500 text-white ">Download Resume</button>
        <button onClick={()=> window.open('https://github.com/ramitbasyal2','_blank')} className=" border border-neutral-700 cursor-pointer font-bold max-sm: max-sm:px-2 px-4 py-3 md:px-8
         max-sm:py-3 md:text-xl md:py-3 text-xs rounded-xl hover:text-white hover:bg-neutral-900">Github</button>
      </div>
     </div>
    </motion.div>
  );
};

export default Hero;
