import React from "react";
import AndroidStudio from "../../../../../public/assets/android-studio.png";
import Image from "next/image";

const ClientSection = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 bg-black/5 mb-16">
      <div className="flex justify-center items-center flex-col gap-8 mb-8">
        <div className="text-lg font-bold text-red-500">
          OUR PRESTIGIOUS CLIENTS
        </div>
        <div className="text-3xl font-semibold w-3/5 text-center">
          Our Relationships with the Leading Clients Testify our Commitment to
          Excellence.
        </div>
      </div>
      <div className="container px-32 flex flex-wrap gap-4 justify-center items-center">
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
        <Image
          src={AndroidStudio}
          alt="Image 1"
          className="slider-item w-52 h-20 object-contain p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default ClientSection;
