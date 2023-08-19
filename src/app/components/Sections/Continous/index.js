import React from "react";
import ContinuousCarousel from "../../Carousel/ContinousCarousel";

const ContinousSection = () => {
  return (
    <div className="mb-16">
      <div className="flex justify-center items-center flex-col gap-4 mb-4">
        <div className="text-lg font-bold text-red-500">TOOLS AND TECHNOLOGIES</div>
        <div className="text-3xl font-semibold">Elevate Your Business with our Cutting-Edge Solutions</div>
      </div>
      <ContinuousCarousel />
    </div>
  );
};

export default ContinousSection;
