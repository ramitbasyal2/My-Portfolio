import React, { useState } from "react";
import { skillLists } from "../../assets/project";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const Skills = () => {

  const [data,setData] = useState(true)
  const [extraData,setExtraData] = useState(true)
  const [count, setCount] = useState(0)

  return (
     
    <>
     { count > 0 && <div className={`w-full py-20 lg:py-40 md:px-12 px-6 `}>
    <div className="max-w-7xl mx-auto ">
      <div className=" flex items-center justify-between mb-16">
        <h1 className="text-4xl font-bold tracking-wide">
          <span className={`border-b-6 border-gray-500 text-white `}>My</span>
          <span className={`text-white text-5xl`}>S</span>
          <span className={`border-b-6 border-gray-500`}>kills</span> :
        </h1>
      </div>

      {/* skills  */}
      <div onClick={()=> setData(!data)} className="relative border-l border-gray-600 p-6">
        <span  className="w-8 h-8 bg-blue-700 absolute -top-6 -left-4 inset-0 rounded-full cursor-pointer
          flex items-center justify-center "> <ChevronDown 
          className={`transition-transform duration-300  ${data ? 'rotate-0' : 'rotate-180' } `} size={28}/> </span>
          
              <div className= {`overflow-hidden transition-all duration-500 ease-in-out
              ${data ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0' } `}>
              <h2 className="text-xl font-bold mb-4">Frontend :</h2>
        <div className="mb-8 border border-neutral-600 px-4 py-4 rounded-md">
          <ul className=" text-gray-400 mb-4">
            <li>● Focused on clean architecture, optimized rendering, and scalable frontend solutions. </li>             
          </ul>
          <div className="mt-2 flex flex-wrap gap-3 rounded-md mb-3 text-[12px] lg:text-[14px]">
            <p className="bg-neutral-700 px-3 rounded-xl">HTML</p>
            <p className="bg-neutral-700 px-3 rounded-xl">CSS</p>
            <p className="bg-neutral-700 px-3 rounded-xl">TAILWIND CSS</p>
            <p className="bg-neutral-700 px-3 rounded-xl"> JAVASCRIPT</p>
            <p className="bg-neutral-700 px-3 rounded-xl">REACT</p>
          </div>
          
        </div>
        <h2 className="text-xl font-bold mb-4">Backend :</h2>
        <div className="border border-neutral-600 p-4 mb-4 rounded-md">
          <ul className=" text-gray-400 mb-4">
            <li>  ● Have experience working with Node.js and Express to build scalable and efficient backend applications.</li>                             
          </ul>
            <div className="mt-2 flex flex-wrap gap-3 mb-3 text-[12px] lg:text-[14px]">
            <p className="bg-neutral-700 px-3 rounded-xl">NODE.JS</p>
            <p className="bg-neutral-700 px-3 rounded-xl">MONGODB</p>
            <p className="bg-neutral-700 px-3 rounded-xl">Express</p>
            <p className="bg-neutral-700 px-3 rounded-xl"> JWT</p>
            <p className="bg-neutral-700 px-3 rounded-xl">REST</p>
          </div>
          </div>
            </div>
          </div>

          <div onClick={()=> setExtraData(!extraData)} className="relative border-l border-gray-600 p-6">
            <span className="w-8 h-8 bg-blue-700 absolute -top-6 -left-4 inset-0 cursor-pointer rounded-full flex items-center justify-center "><ChevronDown
            className={`transition-transform duration-300 ${extraData ? 'rotate-0' : 'rotate-180' }`} size={28}/></span>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out  ${extraData ? 'max-h-[1000px]' : 'max-h-0' }  `}> 
                <h2 className="text-xl font-bold mb-4">Databases :</h2>
        <div className="border border-neutral-600 p-4 mb-4 rounded-md">
          <ul className=" text-gray-400 mb-4">
            <li> ● Databases play a critical role in data storage and management. Below are the databases I work with. </li>                             
          </ul>
            <div className="mt-2 flex flex-wrap gap-3 mb-3 text-[12px] lg:text-[14px]">
            <p className="bg-neutral-700 px-3 rounded-xl">MONGODB</p>
            <p className="bg-neutral-700 px-3 rounded-xl">PostgreSQL</p>
              <p className="bg-neutral-700 px-3 rounded-xl">mySQL</p>
          </div>
        </div>

          <h2 className="text-xl font-bold mb-4">Deployment :</h2>
        <div className="border border-neutral-600 p-4 mb-4 rounded-md">
          <ul className=" text-gray-400 mb-4">
            <li> ● I also handle application deployment using reliable platforms to ensure smooth, secure, and scalable production environments. </li>                             
          </ul>
            <div className="mt-2 flex flex-wrap gap-3 mb-3 text-[12px] lg:text-[14px]">
            <p className="bg-neutral-700 px-3 rounded-xl">vercel</p>
            <p className="bg-neutral-700 px-3 rounded-xl">Netify</p>
            
          </div>
        </div>
          <h2 className="text-xl font-bold mb-4">Tools :</h2>
        <div className="border border-neutral-600 p-4 mb-4 rounded-md">
          <ul className=" text-gray-400 mb-4">
            <li> ● In addition, I use the following  tools and technologies to improve development workflow and productivity. </li>                             
          </ul>
            <div className="mt-2 flex flex-wrap gap-3 mb-3 text-[12px] lg:text-[14px]">
            <p className="bg-neutral-700 px-3 rounded-xl">Git</p>
            <p className="bg-neutral-700 px-3 rounded-xl">Github</p>
              <p className="bg-neutral-700 px-3 rounded-xl">Postman</p>
                              <p className="bg-neutral-700 px-3 rounded-xl">Prettier</p>
          </div>
        </div>
            </div>
          
    

      </div>

      <div className="mb-16 text-center">
        <p className="text-blue-500 italic tracking-wider ">
          TECHNICAL TOOKIT
        </p>
        <h1 className="text-4xl max-sm:text-2xl mt-2 font-bold uppercase ">
          Mastery & Tools
        </h1>
      </div>

      {/* skills showcase */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-x-6 gap-y-4">
        {skillLists.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className=""
          >
            <div
              className=" group flex flex-col items-center justify-center hover:bg-zinc-800 hover:text-white rounded-xl 
                          transfrom translate hover:-translate-1 duration-700  border border-neutral-700 p-6"
            >
              <p className=" lg:grayscale lg:group-hover:grayscale-0 text-3xl">
                {skill.icon}
              </p>
              <p className="font-bold mt-2 mb-2">{skill.name}</p>
              <div className="w-full h-1 relative bg-neutral-700 mt-4">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute h-1 bg-blue-700 "
                  style={{ width: `${skill.level}%` }}
                ></motion.span>
    
              </div>
              <p className="mt-4 text-xs text-neutral-500 group-hover:text-white">
                {skill.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>}
 
   <p className='w-full h-screen flex items-center justify-center text-2xl text-neutral-500 ' >Skills Will Be Added Soon...</p>
    </>
    
   
    
  );
};

export default Skills;
