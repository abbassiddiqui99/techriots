import Carousel from "./components/Carousel/Carousel";
import imagePic from "../../public/assets/image.jpeg";
import imagePic2 from "../../public/assets/image3.jpg";
import odooBanner from "../../public/assets/oodo-banner-right-side.webp";
import webBanner from "../../public/assets/react-banner-sider.webp";
import { PiShoppingCartLight } from "react-icons/pi";

const slidesContent = [
  {
    slideImage: imagePic,
    leftContent: (
      <div className="flex-auto justify-center flex flex-col h-[650px] w-2/5 gap-y-20">
        <div className="text-6xl font-bold">Odoo Development Services</div>
        <div className="text-xl">
          Leverage the power of emerging Artificial Intelligence technology to
          accelerate your business transformation!
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
    ),
    banner: odooBanner,
  },
  {
    slideImage: imagePic2,
    leftContent: (
      <div className="flex-auto justify-center flex flex-col h-[650px] w-2/5 gap-y-20">
        <div className="text-6xl font-bold">WEB APPLICATION DEVELOPMENT</div>
        <div className="text-xl">
          Are you in need of a top ReactJS development company?. We are the top
          ReactJS development company in Pakistan.
        </div>
        <div className="flex gap-2">
          <div className="cursor-pointer bg-red-600 text-white font-medium text-sm px-8 py-4 rounded-md flex justify-center items-center gap-x-2 hover:bg-red-600/75">
            <div>Contact Us Today</div>
          </div>
        </div>
      </div>
    ),
    banner: webBanner,
  },
];

export default function Home() {
  return (
    <div>
      <div>
        <Carousel slidesContent={slidesContent} interval={10000} />
      </div>
      <div className="h-[650px]"></div>

      {/* Counter Section */}
      <div className="flex justify-center items-center mx-auto container px-32 my-32">
        <div className="h-[500px] w-full flex">
          <div className="flex-auto flex flex-col w-2/6">
            <div className="capitalize text-md font-semibold text-red-600">
              TECHROITS-ACCELERATION GROWTH
            </div>
            <div className="text-3xl font-bold my-10">
              Our numbers will give you the answer.
            </div>
            <div className="bg-black/50 flex-1 flex justify-center items-center">
              Image
            </div>
          </div>
          <div className="flex-auto w-4/6 rounded-3xl rounded-bl-[60px] bg-[url('https://placekitten.com/1400')] bg-cover bg-center">
            <div className="w-full h-full rounded-3xl rounded-bl-[60px] flex justify-center items-center backdrop-brightness-[0.1] text-white flex-col">
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
    </div>
  );
}
