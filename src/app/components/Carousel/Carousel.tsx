"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ slidesContent, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesContent.length);
    }, interval);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => {
      pauseTimer();
    };
  }, [slidesContent, interval]);

  return (
    <>
      <div
        className="carousel-container relative"
        onMouseEnter={pauseTimer}
        onMouseLeave={startTimer}
      >
        <div className="carousel-inner-container overflow-hidden">
          {slidesContent.map((slide, index) => (
            <div
              key={`slides_${index}`}
              className={`carousel-slide w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-[650px] bg-gray-900 opacity-70"></div>
              <Image
                src={slide?.slideImage}
                alt={`Slide ${index}`}
                className="w-full h-[650px]"
              />
              <div className="absolute top-0 left-0 right-0 mx-auto container px-32">
                <div className="carousel-content text-white w-full flex">
                  {slide.leftContent}
                  <div className="flex-auto justify-center flex items-center h-[650px] w-3/5">
                    <Image src={slide.banner} alt="Odoo Banner" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-[600px] flex gap-1 w-full justify-center">
          {slidesContent.map((slide, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              className={clsx(
                "bg-gray-300 h-1 w-6 rounded-md cursor-pointer",
                currentIndex === index && "!bg-red-600"
              )}
              key={`btn_${index}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="h-[650px]"></div>
    </>
  );
};

export default Carousel;
