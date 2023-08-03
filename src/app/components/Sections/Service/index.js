import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi";

const ServiceSection = () => {
  return (
    <div className="flex justify-center items-center mx-auto container bg-black/5 rounded-3xl px-32 py-32 mb-32">
    <div className="w-full flex">
      <div className="flex-auto flex flex-col w-5/12 bg-white rounded-l-3xl p-6">
        <div className="capitalize text-md font-semibold text-red-600">
          Our Services
        </div>
        <div className="text-3xl font-bold mt-4 mb-2">
          Uncover the Power of Advanced Technologies with Us!.
        </div>
        <div className="text-sm font-semibold text-gray-500">
          Uncover the Power of Advanced Technologies with Us!.
        </div>
        <div className="bg-black/50 flex-1 flex justify-center items-center mt-4">
          Image
        </div>
      </div>
      <div className="flex-auto h-[650px] w-8/12 rounded-r-3xl bg-[url('https://placekitten.com/1400')] bg-cover bg-center">
        <div className="w-full h-full rounded-r-3xl flex justify-center items-center backdrop-brightness-[0.1] text-white flex-col">
          <div className="flex-1 flex w-full">
            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
              <div className="pl-8">
                <PiShoppingCartLight color="red" size="4rem" />
              </div>
              <div className="pl-2">
                <div className="text-4xl font-bold pb-1">2021</div>
                <div className="text-sm">Foundation</div>
              </div>
            </div>
            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
              <div className="pl-8">
                <PiShoppingCartLight color="red" size="4rem" />
              </div>
              <div className="pl-2">
                <div className="text-4xl font-bold pb-1">2021</div>
                <div className="text-sm">Foundation</div>
              </div>
            </div>{" "}
            <div className="flex-1 flex items-center border-gray-700/30	border-b">
              <div className="pl-8">
                <PiShoppingCartLight color="red" size="4rem" />
              </div>
              <div className="pl-2">
                <div className="text-4xl font-bold pb-1">2021</div>
                <div className="text-sm">Foundation</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex w-full">
            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
              <div className="pl-8">
                <PiShoppingCartLight color="red" size="4rem" />
              </div>
              <div className="pl-2">
                <div className="text-4xl font-bold pb-1">2021</div>
                <div className="text-sm">Foundation</div>
              </div>
            </div>
            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
              <div className="pl-8">
                <PiShoppingCartLight color="red" size="4rem" />
              </div>
              <div className="pl-2">
                <div className="text-4xl font-bold pb-1">2021</div>
                <div className="text-sm">Foundation</div>
              </div>
            </div>{" "}
            <div className="flex-1 flex items-center border-gray-700/30	border-b">
              <div className="pl-8">
                <PiShoppingCartLight color="red" size="4rem" />
              </div>
              <div className="pl-2">
                <div className="text-4xl font-bold pb-1">2021</div>
                <div className="text-sm">Foundation</div>
              </div>
            </div>
          </div>{" "}
          <div className="flex-1 flex w-full">
            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
              <div className="pl-8">
                <PiShoppingCartLight color="red" size="4rem" />
              </div>
              <div className="pl-2">
                <div className="text-4xl font-bold pb-1">2021</div>
                <div className="text-sm">Foundation</div>
              </div>
            </div>
            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
              <div className="pl-8">
                <PiShoppingCartLight color="red" size="4rem" />
              </div>
              <div className="pl-2">
                <div className="text-4xl font-bold pb-1">2021</div>
                <div className="text-sm">Foundation</div>
              </div>
            </div>{" "}
            <div className="flex-1 flex items-center border-gray-700/30	border-b">
              <div className="pl-8">
                <PiShoppingCartLight color="red" size="4rem" />
              </div>
              <div className="pl-2">
                <div className="text-4xl font-bold pb-1">2021</div>
                <div className="text-sm">Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServiceSection