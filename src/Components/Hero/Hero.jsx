import React from "react";
import { motion } from "motion/react";
const Hero = () => {
  return ( 
    <motion.div
      className="w-full relative"
      initial={{ opacity: 0, y: 100}}
      whileInView={{opacity: 1,y: 0}}
      transition={{ duration: 0.8}}
      viewport={{once: true}}
      >
       
     <div className="max-w-7xl mx-auto flex items-center justify-center flex-col text-center px-6 md:px-12 lg:px-24 max-sm:py-20 py-30">
      <div className="border absolute top-23 md:top-33 -rotate-10 text-xs text-start px-3 rounded-2xl py-[2px] font-[monospace] text-[#5dcaa5]"> 
        ●  Open For Opportunities</div>
      <div className="mt-12 max-sm:text-5xl sm:text-8xl md:text-[110px] lg:text-[130px] font-bold">
        {/* <h1> ฿ Ʉ ł Ⱡ ₮</h1> */}
        <h1><span className="relative text-gray-600">B
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-100 font-medium">B</span>
        </span>
             <span className="relative text-gray-600">U
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-100 font-medium">U</span>
        </span>
        <span className="relative text-gray-600">I
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-100 font-medium">I</span>
        </span>
        <span className="relative text-gray-600">L
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-100 font-medium">L</span>
        </span>
        <span className="relative text-gray-600">T
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-100 font-medium">T</span>
        </span>
             
             </h1>
       <div className="flex gap-4">
         <h1 className="text-blue-800"><span className="relative text-gray-600">T
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-300 font-medium">T</span>
        </span>
        <span className="relative text-gray-600">O
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-300 font-medium">O</span>
        </span>
        </h1>
         <h1><span className="relative text-gray-600">B
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-400 font-medium">B</span>
        </span>
             <span className="relative text-gray-600">U
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-400 font-medium">U</span>
        </span>
        <span className="relative text-gray-600">I
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-400 font-medium">I</span>
        </span>
        <span className="relative text-gray-600">L
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-400 font-medium">L</span>
        </span>
        <span className="relative text-gray-600">D
           <span className="absolute inset-0 top-3 lg:top-7 right-6 text-gray-400 font-medium">D</span>
        </span>
             
             </h1>
       </div>
       
      </div>
      <div className="mt-16 max-sm:mt-6 md:w-2xl lg:w-3xl">
        <p className="text-neutral-500 max-sm:text-xl text-sm">
       <span className="bg-linear-to-r from-indigo-500 to-yellow-500 bg-clip-text text-transparent 
       font-medium text-xl"> Hey there! <br /> I'm Ramit, a MERN-stack developer, who enjoys building for the web.
       </span> 
       
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 max-sm:mt-8 gap-3 md:gap-4">
        <button className=" text-black cursor-pointer border-0 outline-0 font-bold max-sm:px-2 px-4 md:px-8 py-4
         max-sm:py-3 md:text-xl md:py-4 text-xs rounded-xl bg-[#5dcaa5] hover:bg-[#5dcaa6c2] text-black ">Download Resume</button>
        <button onClick={()=> window.open('https://github.com/ramitbasyal2','_blank')} className=" border border-neutral-700 cursor-pointer font-bold max-sm: max-sm:px-2 px-4 py-4 md:px-8
         max-sm:py-3 md:text-xl md:py-4 text-xs rounded-xl hover:text-white hover:bg-neutral-900">Github</button>
      </div>
     </div>
    </motion.div>
  );
};

export default Hero;
