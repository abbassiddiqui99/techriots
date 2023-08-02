"use client";

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import { BsTelephoneFill } from "react-icons/bs";

const Carousel = ({ images, interval, odooBanner }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
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
  }, [images, interval]);

  return (
    <div
      className="carousel-container relative"
      onMouseEnter={pauseTimer}
      onMouseLeave={startTimer}
    >
      <div className="carousel-inner-container overflow-hidden">
        {images.map((image, index) => (
          <>
            <div
              key={index}
              className={`carousel-slide w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-[650px] bg-gray-900 opacity-70"></div>
              <Image
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-[650px]"
              />
              <div className="absolute top-0 left-0 right-0 mx-auto container px-32">
                <div className="carousel-content text-white w-full flex">
                  <div className="flex-auto justify-center flex flex-col h-[650px] w-2/5 gap-y-20">
                    <div className="text-6xl font-bold">
                      Odoo Development Services
                    </div>
                    <div className="text-xl">
                      Leverage the power of emerging Artificial Intelligence
                      technology to accelerate your business transformation!
                    </div>
                    <div className="flex gap-2">
                      <div className="cursor-pointer bg-red-600 text-white font-medium text-sm px-8 py-4 rounded-md flex justify-center items-center gap-x-2 hover:bg-red-600/75">
                        <div>Contact Us</div>
                      </div>
                      <div className="cursor-pointer outline outline-1 outline-red-600 text-white font-medium text-sm px-8 py-4 rounded-md flex justify-center items-center gap-x-2 hover:bg-red-600">
                        <div>Learn More</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-auto justify-center flex items-center h-[650px] w-3/5">
                    <Image src={odooBanner} alt="Odoo Banner" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="absolute top-[600px] flex gap-1 w-full justify-center">
        {images.map((image, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            className={clsx(
              "bg-gray-300 h-1 w-6 rounded-md",
              currentIndex === index && "!bg-red-600"
            )}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

Carousel.defaultProps = {
  interval: 3000, // Default interval in milliseconds (3 seconds)
};

export default Carousel;
