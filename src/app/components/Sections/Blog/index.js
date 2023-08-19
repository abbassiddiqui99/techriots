import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const BlogCardSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-16 mb-32">
        <div className="flex justify-center items-center flex-col gap-8 mb-8">
          <div className="text-lg font-bold text-red-500">CASE STUDIES</div>
          <div className="text-3xl font-semibold text-center">
            Discover our Growing Portfolio of Case Studies
          </div>
        </div>
        <div className="container px-32 flex mx-auto gap-4 justify-center items-center">
          <div className="w-64 bg-white shadow-2xl rounded-md">
            <div className="flex-1 flex justify-center items-center relative rounded-sm h-40">
              <Image
                src={"https://placekitten.com/1600"}
                alt="image"
                fill
                className="rounded-[5px]"
              />
            </div>
            <div className="my-6 mx-4">
              <div className="text-sm text-gray-700 tracking-wider font-medium">
                APACHE SPARK
              </div>
              <div className="text-lg font-semibold leading-snug mt-3">
                Domain-Specific Data Processing Engine
              </div>
              <div className="mt-8 text-xs uppercase transition duration-700 flex gap-2 items-center hover:translate-x-4 hover:text-red-500 cursor-pointer ease-in-out">
                View Case Study
                <FiArrowRight />
              </div>
            </div>
          </div>
          <div className="w-64 bg-white shadow-2xl rounded-md">
            <div className="flex-1 flex justify-center items-center relative rounded-sm h-40">
              <Image
                src={"https://placekitten.com/1600"}
                alt="image"
                fill
                className="rounded-[5px]"
              />
            </div>
            <div className="my-6 mx-4">
              <div className="text-sm text-gray-700 tracking-wider font-medium">
                APACHE SPARK
              </div>
              <div className="text-lg font-semibold leading-snug mt-3">
                Domain-Specific Data Processing Engine
              </div>
              <div className="mt-8 text-xs uppercase transition duration-700 flex gap-2 items-center hover:translate-x-4 hover:text-red-500 cursor-pointer ease-in-out">
                View Case Study
                <FiArrowRight />
              </div>
            </div>
          </div>
          <div className="w-64 bg-white shadow-2xl rounded-md">
            <div className="flex-1 flex justify-center items-center relative rounded-sm h-40">
              <Image
                src={"https://placekitten.com/1600"}
                alt="image"
                fill
                className="rounded-[5px]"
              />
            </div>
            <div className="my-6 mx-4">
              <div className="text-sm text-gray-700 tracking-wider font-medium">
                APACHE SPARK
              </div>
              <div className="text-lg font-semibold leading-snug mt-3">
                Domain-Specific Data Processing Engine
              </div>
              <div className="mt-8 text-xs uppercase transition duration-700 flex gap-2 items-center hover:translate-x-4 hover:text-red-500 cursor-pointer ease-in-out">
                View Case Study
                <FiArrowRight />
              </div>
            </div>
          </div>
          <div className="w-64 bg-white shadow-2xl rounded-md">
            <div className="flex-1 flex justify-center items-center relative rounded-sm h-40">
              <Image
                src={"https://placekitten.com/1600"}
                alt="image"
                fill
                className="rounded-[5px]"
              />
            </div>
            <div className="my-6 mx-4">
              <div className="text-sm text-gray-700 tracking-wider font-medium">
                APACHE SPARK
              </div>
              <div className="text-lg font-semibold leading-snug mt-3">
                Domain-Specific Data Processing Engine
              </div>
              <div className="mt-8 text-xs uppercase transition duration-700 flex gap-2 items-center hover:translate-x-4 hover:text-red-500 cursor-pointer ease-in-out">
                View Case Study
                <FiArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="cursor-pointer mt-14 bg-red-600 text-white font-medium text-sm px-8 py-4 rounded-md flex justify-center items-center gap-x-2 hover:bg-red-600/75">
            View All
            <FiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSection;
