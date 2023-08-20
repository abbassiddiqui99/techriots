import Carousel from "./components/Carousel/Carousel";
import ServiceSection from "./components/Sections/Service";
import CounterSection from "./components/Sections/Counter";
import ContinousSection from "./components/Sections/Continous";
import ClientSection from "./components/Sections/Client";
import BlogCardSection from "./components/Sections/Blog";
import imagePic from "../../public/assets/image.jpeg";
import imagePic2 from "../../public/assets/image3.jpg";
import odooBanner from "../../public/assets/oodo-banner-right-side.webp";
import webBanner from "../../public/assets/react-banner-sider.webp";

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
      <Carousel slidesContent={slidesContent} interval={10000} />

      {/* Counter Section */}
      <CounterSection />

      {/* Service Section */}
      <ServiceSection />

      {/* Continous Section */}
      <ContinousSection />

      {/* Client Section */}
      <ClientSection />

      <BlogCardSection />
    </div>
  );
}
