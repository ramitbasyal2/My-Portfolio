
import React, { useState, useRef, useEffect } from "react";
import { slides } from "../../assets/project";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hobbies = () => {
  const [current, setCurrent] = useState(0);
  const [isPause, setIsPause] = useState(false)
  const timeoutRef = useRef(null);
  const startX = useRef(0);

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % slides.length);
  };

  // const prevSlide = () => {
  //   setCurrent(prev =>
  //      prev === 0 ? slides.length -1 : prev-1
  //   );
  // };
 
  const prevSlide = ()=>{
    setCurrent(prev => 
    (prev - 1 + slides.length) % slides.length
    )
  }
  // Auto slide
  useEffect(() => {
    if(isPause) return; //stop autto-slide
    timeoutRef.current = setTimeout(nextSlide, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current,isPause]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <div className="w-full py-20 lg:py-40 md:px-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative w-full h-[600px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={()=> setIsPause(true)}
          onMouseLeave={()=> setIsPause(false)}
        >
        
          <h1 className="font-[cursive] text-2xl lg:text-5xl font-bold mb-2">"Some Pictures"</h1>
          {/* SLIDES */}
          <div
            className="relative flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full h-full flex-shrink-0"
              >
                <img
                  src={slide.image}
                  className="w-full h-full relative object-cover rounded-md shadow-2xl shadow-gray-300"
                  alt=""
                
                />
              </div>
              
            ))}
            
          </div>
             
            <div className="absolute flex inset-0 bg-black/55">
            </div>
           

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2  bg-[#d1d1d13f]  md:p-3 lg:p-3 cursor-pointer "
          >
            <ChevronLeft color="black" size={38} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2  bg-[#d1d1d147] md:p-3 lg:p-3 cursor-pointer"
          >
            <ChevronRight color="black" size={36} />
          </button>
          
      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/60"
            }`}
          />
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
