"use client";
import NavbarMain from "./Componets/NavbarMain";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import dynamic from "next/dynamic";
import { BsWhatsapp, BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";

const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "react-bootstrap";
import Images from "./Componets/Images";
import Testimonials from "./Componets/Testimonials";
import Company from "./Componets/Company";
import Hero from "./Componets/Hero";
import Hero2 from "./Componets/Hero2";
import BottomBar from "./Componets/BottomBar";
function Home() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <NavbarMain />
      <Slider {...settings}>
        <div>
          <Image
            width={"100%"}
            alt="GK Truck Tyres"
            className="cr-img"
            height="400"
            src="/truck3.jpg"
          />
        </div>
        <div>
          <Image
            width={"100%"}
            alt={"GK Truck Tyres"}
            className="cr-img"
            height="400"
            src="/truck6.jpg"
          />
        </div>
        <div>
          <Image
            width={"100%"}
            alt="GK Truck Tyres"
            className="cr-img"
            height="400"
            src="/truck1.jpg"
          />
        </div>
      </Slider>
      <Hero />
      <Images />
      <Hero2 />
      <Testimonials />
      <Company />
      <Footer />

      <Link href="/">
        <div className="floting-whatsapp">
          <BsWhatsapp className="icon" />
        </div>
      </Link>
      <Link href="/">
        <div className="floting-insta">
          <BsInstagram className="icon" />{" "}
        </div>
      </Link>
      <Link href="/">
        <div className="floting-call">
          <FaPhoneVolume className="icon" />
        </div>
      </Link>
      <Link href="/">
        <div className="floting-email">
          <FiMail className="icon" />
        </div>
      </Link>
      <BottomBar/>
    </>
  );
}

export default Home;
