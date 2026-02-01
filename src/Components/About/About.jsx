import React, { useState } from 'react'
import {motion} from 'motion/react'

const About = ({mode}) => {

  return (
    <div className={` ${ mode === 'light-mode' ? 'bg-[#fff]' : 'bg-[#111]' }   w-full px-4 sm:px-6 md:px-12 ssm:py-16 lg:px-20 py-10 md:py-20 lg:py-30 `}>
      <div className=" max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-sm:gap-2 gap-20">
        <div>
          {/* images part */}
          <motion.div
            initial={{opacity:0,x:-30}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:1,delay:0.2}}
             viewport={{once:true}}
    
            className="relative w-full max-w-[600px] h-[450px] md:h-[600px] lg:h-[650px] mx-auto max-sm:mb-48 " >
            <img src="./profile1.jpeg"alt=""
              className="w-full h-full object-cover rounded-xl" />
             
             {/* tag */}
            <div className=" absolute -right-5 -bottom-5 bg-blue-800 max-sm:p-2  p-4 max-sm:text-[18px] text-2xl font-bold text-white rounded-xl max-sm:w-[190px] max-sm:h-[90px] w-[260px] h-[110px]" >
              <span className="text-2xl">1+</span>
              <br />
              YEARS EXPERIENCE
            </div>
          </motion.div>

          {/* till here */}
        </div>
        <motion.div 
          initial={{opacity:0,x:-30}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1,delay:0.2}}
          viewport={{once:true}}
    
        className="max-sm:-mt-42">
          <p className="italic text-blue-600 ">THE DEVELOPER</p>
          <h1 className="text-3xl md:4xl lg:text-4xl tracking-tight max-sm:text-2xl font-mono max-sm:mt-2 mt-3 mb-3">
            Bridge between <br />
            <span className="text-gray-600"> imagination </span>
            and technical <br /> reality.
          </h1>
          <div className="max-sm:text-[16px] text-xl text-neutral-500 mb-3">
            <p className="">
              Hello! I'm Ramit, a frontend developer decicated to pushing the
              boundries of what's possible on the web. I don't just write code.
              I design systems and orchestrate movements that feel natural to
              the human eye.{" "}
            </p>
            <br />
            <p className="border-b border-neutral-600 mb-4 pb-6">
              {" "}
              My journey started with a deep curiosity for how digitalinterfaces
              inluence hhuman behavior. Today i leverage modern tools like React
              and framer Motion to build fast, accessible , and delightful
              applications.{" "}
            </p>
          </div>
          <div className="flex gap-6 group">
            <div className="border-r border-neutral-500 relative">
              <h2 className='font-bold text-xl mb-2 '>Strategy</h2>
              <p className='text-sm text-gray-400 max-w-72 '>
                Translating business goals into scalable frontend aechitectures.
              </p>
              <span className='absolute w-3 h-3 bg-blue-500  -right-[6px] top-0 rounded-full group-hover:scale-130 group-hover:bg-amber-400'></span>
            </div>
            <div className="design">
              <h2 className='font-bold text-xl mb-2'>Design</h2>
              <p className='text-sm text-gray-400 max-w-72'>Creating asthetic UI Components that priotize usability. </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About