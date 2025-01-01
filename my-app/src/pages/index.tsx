import Carousel from "@/components/content/carousel/Carousel";
import { Gallery } from "@/components/content/main/Gallery";
import { MainArticle } from "@/components/content/main/MainArticle";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { Location } from "@/components/content/location/Location";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <MainArticle />
      <Gallery />
      <Location />
      <Footer />{" "}
    </div>
  );
}
