import React from "react";
import { services } from "../../assets/project";
const Services = () => {

  return (
    <div className="w-full md:px-12 px-6 py-20 lg:py-40 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* navabar */}
        <div className=" flex items-center justify-between md:mb-20 mb-16 max-sm:mb-14">
          <h1 className="text-4xl font-bold tracking-wide">
            <span className={`border-b-6 border-gray-500 text-white max-sm:text-2xl `}>
              {" "}
              <span className="border-b-6 border-amber-600 max-sm:text-2xl ">My</span> Services :
            </span>{" "}
            
          </h1>
        </div>
        {/* services */}
       
            <div className="flex items-center justify-center flex-wrap gap-6 md:mb-40 ">
              {services.map((service)=>(
                <div className="bg-[#111] p-4 rounded-xl max-w-[400px] transition-transform duratio-500 hover:scale-110">
                   <h1 className="mb-3 font-bold text-xl bg-linear-to-r from-indigo-300 to-yellow-500 bg-clip-text text-transparent">{service.role}</h1>
                   <p className="text-neutral-400 mb-4">{service.description}</p>
                   <button className="cursor-pointer bg-linear-to-r from-indigo-500 to-pink-700 text-white  px-2 lg:px-3 py-1  bg-white text-black font-bold rounded-md hover:bg-[#d1d1d1d2]">{service.button }</button>
                </div>
              ))}
            </div>
        </div>
      </div>
  );
};

export default Services;
