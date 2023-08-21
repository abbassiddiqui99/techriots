import FAQ from "../components/FAQ";
import imagePic2 from "../../../public/assets/image3.jpg";
import webBanner from "../../../public/assets/react-banner-sider.webp";
import Image from "next/image";
import { PiShoppingCartLight } from "react-icons/pi";

export default function About() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[650px] bg-gray-900 opacity-70"></div>
        <Image src={imagePic2} alt={`bg-image`} className="w-full h-[650px]" />
        <div className="absolute top-0 left-0 right-0 mx-auto container px-32">
          <div className="carousel-content text-white w-full flex">
            <div className="flex-auto justify-center flex flex-col h-[650px] w-2/5 gap-y-20">
              <div className="text-6xl font-bold">
                WEB APPLICATION DEVELOPMENT
              </div>
              <div className="text-xl">
                Are you in need of a top Web development company?. We are the
                top Web development company in Pakistan.
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer bg-red-600 text-white font-medium text-sm px-8 py-4 rounded-md flex justify-center items-center gap-x-2 hover:bg-red-600/75">
                  <div>Contact Us Today</div>
                </div>
              </div>
            </div>
            <div className="flex-auto justify-center flex items-center h-[650px] w-3/5">
              <Image src={webBanner} alt="Odoo Banner" />
            </div>
          </div>
        </div>
        {/* <div className="h-[650px]"></div> */}
      </div>
      <div className="container px-32 mx-auto">
        <div className="my-12">
          <div className="text-5xl mt-20 font-bold">
            Our Excellent Web Development Services
          </div>
          <div className="flex my-8">
            <div className="flex-1 flex justify-center flex-col">
              <div className="text-3xl font-semibold my-4">
                Interactive Web UI Development
              </div>
              <div className="text-xl">
                Our expert Web development services craft advanced applications
                with highly attractive interfaces that guarantee unmatched user
                engagement. Our expert Web development services craft advanced
                applications with highly attractive interfaces that guarantee
                unmatched user engagement.
              </div>
            </div>
            <div className="w-96 p-5 mx-5 h-96 rounded-3xl">
              <div className="rounded-3xl relative w-full h-full">
                <Image
                  src={"https://placekitten.com/1600"}
                  alt="image"
                  fill
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-12">
          <div className="flex my-8">
            <div className="w-96 p-5 !pl-0 mx-5 h-96 rounded-3xl">
              <div className="rounded-3xl relative w-full h-full">
                <Image
                  src={"https://placekitten.com/1100"}
                  alt="image"
                  fill
                  className="rounded-3xl"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center p-5 mx-5 flex-col">
              <div className="text-3xl font-semibold my-4">
                Interactive Web UI Development
              </div>
              <div className="text-xl">
                Our expert Web development services craft advanced applications
                with highly attractive interfaces that guarantee unmatched user
                engagement. Our expert Web development services craft advanced
                applications with highly attractive interfaces that guarantee
                unmatched user engagement.
              </div>
            </div>
          </div>
        </div>
        <div className="my-12">
          <div className="flex my-8">
            <div className="flex-1 flex justify-center flex-col">
              <div className="text-3xl font-semibold my-4">
                Interactive Web UI Development
              </div>
              <div className="text-xl">
                Our expert Web development services craft advanced applications
                with highly attractive interfaces that guarantee unmatched user
                engagement. Our expert Web development services craft advanced
                applications with highly attractive interfaces that guarantee
                unmatched user engagement.
              </div>
            </div>
            <div className="w-96 p-5 mx-5 h-96 rounded-3xl">
              <div className="rounded-3xl relative w-full h-full">
                <Image
                  src={"https://placekitten.com/1600"}
                  alt="image"
                  fill
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-12">
          <div className="flex my-8">
            <div className="w-96 p-5 !pl-0 mx-5 h-96 rounded-3xl">
              <div className="rounded-3xl relative w-full h-full">
                <Image
                  src={"https://placekitten.com/1100"}
                  alt="image"
                  fill
                  className="rounded-3xl"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center p-5 mx-5 flex-col">
              <div className="text-3xl font-semibold my-4">
                Interactive Web UI Development
              </div>
              <div className="text-xl">
                Our expert Web development services craft advanced applications
                with highly attractive interfaces that guarantee unmatched user
                engagement. Our expert Web development services craft advanced
                applications with highly attractive interfaces that guarantee
                unmatched user engagement.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/5 py-16">
        <div className="container px-48 mx-auto flex justify-center flex-col">
          <div className="text-5xl font-bold text-center mb-14">
            Why Hire Us For ReactJS Development Services?
          </div>
          <div className="flex gap-6 mb-6">
            <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg">
              <div className="px-6">
                <PiShoppingCartLight size="3rem" />
              </div>
              <div className="text-lg text-black/60 font-semibold">
                Experienced and Certified Professionals
              </div>
            </div>
            <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg">
              <div className="px-6">
                <PiShoppingCartLight size="3rem" />
              </div>
              <div className="text-lg text-black/60 font-semibold">
                Experienced and Certified Professionals
              </div>
            </div>
            <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg">
              <div className="px-6">
                <PiShoppingCartLight size="3rem" />
              </div>
              <div className="text-lg text-black/60 font-semibold">
                Experienced and Certified Professionals
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg">
              <div className="px-6">
                <PiShoppingCartLight size="3rem" />
              </div>
              <div className="text-lg text-black/60 font-semibold">
                Experienced and Certified Professionals
              </div>
            </div>
            <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg">
              <div className="px-6">
                <PiShoppingCartLight size="3rem" />
              </div>
              <div className="text-lg text-black/60 font-semibold">
                Experienced and Certified Professionals
              </div>
            </div>
            <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg">
              <div className="px-6">
                <PiShoppingCartLight size="3rem" />
              </div>
              <div className="text-lg text-black/60 font-semibold">
                Experienced and Certified Professionals
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-32 mx-auto py-16">
        <div className="text-5xl font-bold text-center mb-4">
          Our ReactJS Domain Expertise
        </div>
        <div className="text-lg text-black/60 font-semibold text-center mb-12">
          We excel in ReactJS domain expertise, crafting tailored solutions
          forseamless performance and captivating user interfaces, ensuring
          exceptional value for your projects. Our ReactJS domain expertise
          spans diverse industries like:
        </div>
        <div className="flex gap-6 mb-6">
          <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg border">
            <div className="mr-10">
              <PiShoppingCartLight size="2rem" />
            </div>
            <div className="text-lg text-black/60 font-semibold">
              Real Estate
            </div>
          </div>
          <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg border">
            <div className="mr-10">
              <PiShoppingCartLight size="2rem" />
            </div>
            <div className="text-lg text-black/60 font-semibold">
              Real Estate
            </div>
          </div>
          <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg border">
            <div className="mr-10">
              <PiShoppingCartLight size="2rem" />
            </div>
            <div className="text-lg text-black/60 font-semibold">
              Real Estate
            </div>
          </div>
          <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg border">
            <div className="mr-10">
              <PiShoppingCartLight size="2rem" />
            </div>
            <div className="text-lg text-black/60 font-semibold">
              Real Estate
            </div>
          </div>
        </div>
        <div className="flex gap-6 mb-6">
          <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg border">
            <div className="mr-10">
              <PiShoppingCartLight size="2rem" />
            </div>
            <div className="text-lg text-black/60 font-semibold">
              Real Estate
            </div>
          </div>
          <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg border">
            <div className="mr-10">
              <PiShoppingCartLight size="2rem" />
            </div>
            <div className="text-lg text-black/60 font-semibold">
              Real Estate
            </div>
          </div>
          <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg border">
            <div className="mr-10">
              <PiShoppingCartLight size="2rem" />
            </div>
            <div className="text-lg text-black/60 font-semibold">
              Real Estate
            </div>
          </div>
          <div className="flex-1 flex px-4 justify-center items-center bg-white h-32 rounded-lg border">
            <div className="mr-10">
              <PiShoppingCartLight size="2rem" />
            </div>
            <div className="text-lg text-black/60 font-semibold">
              Real Estate
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/5 py-16">
        <div className="container px-48 mx-auto flex justify-center flex-col">
          <div className="text-5xl font-bold text-center mb-8">
            Let&apos;s Create Excellence Together!
          </div>
          <div className="text-lg text-black/60 font-semibold text-center mb-8">
            Thinking To Develop a ReactJS App?
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="cursor-pointer bg-red-600 text-white font-medium text-xl px-8 py-4 rounded-md flex justify-center items-center gap-x-2 hover:bg-red-600/75">
              <div>Contact Us Today</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-80 mx-auto py-16">
        <div className="text-lg mb-4 text-red-600 text-center font-bold">FAQs</div>
        <div className="text-5xl font-bold text-center mb-8">
          Find Your Query Here!
        </div>
        <FAQ />
      </div>
    </>
  );
}
