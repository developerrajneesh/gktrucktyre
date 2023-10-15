import Image from "next/image";
import React from "react";

import Slider from "react-slick";

const Company = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    
  };
  return (
    <div className="mt-5 ">
         <h1 className="text-center p-4 pb-2">Top Companies</h1>
        <p className="text-center pb-4">Discover the trusted tire service partner for top companies at GK Truck Tyres Service.</p>
      <Slider  {...settings}>
        <div > 
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-1.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-2.jpg'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-3.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-4.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-5.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-6.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-7.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-8.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-9.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-10.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-11.webp'}/>
          </div>
        </div>
        <div>
          <div className="campany-box">
          <Image width={140} height={140} src={'/company-12.webp'}/>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Company;
