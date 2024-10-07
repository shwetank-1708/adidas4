import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0); // Initialize current index to 0

  const prev = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-400`}
        style={{ transform: `translateX(-${current * 100}%)` }} // Corrected to move by 100% per slide
      >
        {slides.map((s, index) => (
          <img src={s} alt={`slide-${index}`} key={index} /> // Added unique key
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between">
        <button onClick={prev}>
          <IoIosArrowBack className="text-white text-3xl" />
        </button>
        <button onClick={next}>
          <IoIosArrowForward className="text-white text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
