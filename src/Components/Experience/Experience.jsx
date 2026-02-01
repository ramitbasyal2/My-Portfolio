import React from "react";
import { experience } from "../../assets/project";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="w-full p-6 md:p-12 lg:p-20">
     <div className="max-w-7xl mx-auto">
           <div className="flex flex-col gap-2 mb-16">
        <p className="italic text-blue-400">The Journey</p>
        <h1 className="text-4xl max-sm:text-2xl font-bold uppercase tracking-tight font-sans leading-none">
          Professsional <br />
          Evolution{" "}
        </h1>
      </div>
      <div className="">
        <div className="flex flex-col gap-6 group">
          {experience.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative border-l border-gray-600 px-10"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl mb-4">{data.role}</h2>
                <p className="text-[14px] text-gray-400 uppercase tracking-wide font-mono">
                  {data.duration}
                </p>
              </div>
              <p className="italic text-blue-500 font-bold mb-4">
                {data.company}
              </p>
              <div>
                {data.descriptions?.map((desc, i) => (
                  <ul key={i} className="before:content-['•']  before:mr-2 before:text-blue-700 group-hover:before:text-amber-400 before:text-2xl flex items-center">
                    <li className="text-[15px] mb-2 text-neutral-400">
                      {desc}
                    </li>
                  </ul>
                ))}
              </div>
              <span className="absolute inset-0 -top-2 -left-[9px] h-4 w-4 transition-transform duration-100 bg-blue-600
               rounded-full group-hover:scale-150 group-hover:bg-amber-400"></span>
            </motion.div>
          ))}
        </div>
      </div>
     </div>
    </div>
  );
};

export default Experience;
