import React, { useEffect } from "react";
import { slides } from "../assets/project";
import { motion, useAnimation } from "framer-motion";

const Image = () => {
  const imageWidth = 300 + 24; // width + gap
  const totalWidth = imageWidth * slides.length;
  const infiniteSlides = [...slides, ...slides];
  const controls = useAnimation();

  // start the animation when component mounts
  useEffect(() => {
    controls.start({
      x: [0, -totalWidth],
      transition: { ease: "linear", duration: 25, repeat: Infinity }
    });
  }, [controls, totalWidth]);

  return (
    <div className="w-full overflow-hidden lg:hidden  py-20">
      <motion.div
        className="flex flex-nowrap gap-6"
        animate={controls}
        onHoverStart={() => controls.stop()} // pause on hover
        onHoverEnd={() =>
          controls.start({
            x: [0, -totalWidth],
            transition: { ease: "linear", duration: 25, repeat: Infinity }
          })
        } // resume on hover end
      >
        {infiniteSlides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] h-[388px]">
            <img
              src={slide.image}
              alt=""
              className={`w-full h-full object-cover rounded-xl ${
                index % 2 !== 0 ? "mt-[52px]" : ""
              } lg:grayscale lg:hover:grayscale-0 border-4 border-neutral-600 hover:rotate-2 `}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Image;