import React from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
function Testimonials() {
  const settings1 = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-secondary text-light mt-5">
        <h1 className="text-center p-4 pb-2">Testimonials</h1>
        <p className="text-center pb-4">This is why our customers love  GK Truck Tyres Service!</p>
      <div className="testimonial-slider px-3">
        <Slider {...settings1}>
          <div className="text-center p-4">
            <img src={"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"}  className="testimonial-image" alt={"Avtar1"} />
            <h4>Rajneesh Shukla</h4>
            <p>
              GK Truck Tyres Service delivers every time. Reliable, affordable,
              and top-quality tire options. I trust them with my business, and
              they never disappoint."
            </p>
            <div className="text-center">
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
            </div>
          </div>
          <div className="text-center p-4">
          <img src={"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"}  className="testimonial-image" alt={"Avtar1"} />
            <h4>Rajneesh Shukla</h4>
            <p>
              Quick and efficient! GK Truck Tyres Service got me back on the
              road in no time. Their expertise saved me both time and money.
              Highly recommended."
            </p>
            <div className="text-center">
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
            </div>
          </div>
          <div className="text-center p-4">
          <img src={"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"}  className="testimonial-image" alt={"Avtar1"} />
            <h4>Rajneesh Shukla</h4>
            <p>
              Impressive selection of truck tires! GK Truck Tyres Service has a
              wide range of options to choose from. Their team helped me find
              the perfect fit for my truck.
            </p>
            <div className="text-center">
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
            </div>
          </div>
          <div className="text-center p-4">
          <img src={"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"}  className="testimonial-image" alt={"Avtar1"} />
            <h4>Rajneesh Shukla</h4>
            <p>
              Outstanding customer service! GK Truck Tyres Service truly cares
              about their customers. They're knowledgeable, responsive, and
              always ready to assist. A reliable partner for any truck owner.
            </p>
            <div className="text-center">
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
            </div>
          </div>
          <div className="text-center p-4">
          <img src={"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"}  className="testimonial-image" alt={"Avtar1"} />
            <h4>Rajneesh Shukla</h4>
            <p>
              Exceptional service! GK Truck Tyres Service is my go-to for all my
              truck tire needs. Fast, friendly, and highly skilled team. They
              keep my fleet rolling smoothly.
            </p>
            <div className="text-center">
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
              <AiFillStar color="ebc705" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
