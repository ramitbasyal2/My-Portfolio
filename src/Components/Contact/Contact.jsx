import React from "react";
import { motion } from "motion/react";

const Contact = () => {

   const handleSubmit = (e)=>{
      e.preventDefault()
   }
  return (
    <div className="w-full px-3 md:px-12 lg-px-20 py-20 md:py-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-10">
        
        {/* left side */}
        <motion.div
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.2}}
        viewport={{once:true}}
        
        className="flex flex-col"> 
        <p className="text-xs italic text-blue-600">NEXTS STEPS</p>
        <h1 className="font-bold uppercase text-5xl sm:text-4xl max-sm:text-4xl tracking-tight mt-2 mb-4">
          Lets Build
          <br /> Something <br />
          Iconic.{" "}
        </h1>
        <p className="text-neutral-500 max-w-96 mb-8">
          Wheather you have a fully-formed idea or just the spark of a project,
          I'm here to bring it to life with precision and style.
        </p>
        <div className="flex flex-col">
          <p className="uppercase text-xs font-bold text-zinc-500">Email ME</p>
          <h1 className="font-bold">heyitsme@gmail.com</h1>
        </div>
        <div className="flex flex-col">
          <p className="uppercase text-zinc-400 text-xs mt-4">Socials</p>
          <div className="flex gap-3 text-zinc-600">
            <a href="#">LinkedIn</a>
            <a href="#">Github</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </motion.div>
      {/* rightside - form fillup */}
      <motion.div
         initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.2}}
        viewport={{once:true}}
        
      >
           <form onSubmit={handleSubmit} className="w-4/5 md:w-96 lg:w-5/6 border-b border-neutral-700 p-6 rounded-2xl border">
             <div className="flex flex-col">
                 <label className="text-xs text-gray-400">FULL NAME</label>
              <input type="text" placeholder="Enter your name"
               className="border border-neutral-700 placeholder:text-gray-500 p-3 mt-2 mb-4 rounded-md" />
             </div>
              <div className="flex flex-col">
                 <label className="text-xs text-gray-400">EMAIL</label>
              <input type="email" placeholder="Enter your name"
              className="border border-neutral-700 placeholder:text-gray-500 p-3 mt-2 mb-4 rounded-md" />
             </div>
              <div className="flex flex-col">
                 <label className="text-xs text-gray-400">MESSAGE</label>
               <textarea placeholder="write message.."
                className="resize-none mt-2 placeholder:text-gray-500 border border-gray-500 rounded-md p-3"
                rows={5} cols={10}></textarea>
             </div>

             <div className="mt-6 w-full  border border-neutral-700-pointer mb-2 hover:bg-[#d1d1d123] text-neutral-700 text-center p-4 outline-0 rounded-md text-xl font-bold">
                <button type="submit" className="cursor-pointer">Launch Inquiry</button>
             </div>

           </form>
      </motion.div>
      </div>
    </div>
  );
};

export default Contact;
