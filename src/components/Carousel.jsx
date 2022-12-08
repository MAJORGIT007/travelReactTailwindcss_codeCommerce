import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { sliderData } from "./sliderData";

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const nextSlide = () => {
    setSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  console.log(sliderData)
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img
              className="w-full rounded-md"
              key={item.id}
              src={item.url}
              alt={`Image ${item.id}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
