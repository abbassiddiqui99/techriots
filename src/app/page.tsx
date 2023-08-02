import Carousel from "./components/Carousel/Carousel";
import imagePic from "../../public/assets/image.jpeg"
import imagePic2 from "../../public/assets/image3.jpg"
import odooBanner from "../../public/assets/oodo-banner-right-side.webp"

const images = [
  imagePic,
  imagePic2,
  imagePic,
  imagePic2,
];

export default function Home() {
  return <div>
    <Carousel images={images} odooBanner={odooBanner} interval={100000000} />
  </div>;
}
