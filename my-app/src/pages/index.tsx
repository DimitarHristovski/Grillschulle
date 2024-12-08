import Carousel from "@/components/content/carousel/Carousel";
import { MainArticle } from "@/components/content/main/MainArticle";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <MainArticle />
      <Footer />{" "}
    </div>
  );
}
