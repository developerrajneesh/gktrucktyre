import Image from "next/image";
import React from "react";

function Images() {
  return (
    <div className="row m-0 px-md-5 bg-secondary pb-5">
      <div className="col-6 col-md-4 mt-4 ">
        <div className="card-custom">
          <Image
            width={100}
            height={100}
            alt="GK Truck Tyres"
            className="images-img"
            src={"/tyre-1.jpg"}
          />
        </div>
      </div>
      <div className="col-6 col-md-4 mt-4 ">
        <div className="card-custom">
          <Image
            width={100}
            height={100}
            alt="GK Truck Tyres"
            className="images-img"
            src={"/tyre-2.webp"}
          />
        </div>
      </div>
      <div className="col-6 col-md-4 mt-4 ">
        <div className="card-custom">
          <Image
            width={100}
            height={100}
            alt="GK Truck Tyres"
            className="images-img"
            src={"/tyre-3.png"}
          />
        </div>
      </div>
      <div className="col-6 col-md-4 mt-4 ">
        <div className="card-custom">
          <Image
            width={100}
            height={100}
            alt="GK Truck Tyres"
            className="images-img"
            src={"/tyre-4.webp"}
          />
        </div>
      </div>
      <div className="col-6 col-md-4 mt-4">
        <div className="card-custom">
          <Image
            width={100}
            height={100}
            alt="GK Truck Tyres"
            className="images-img"
            src={"/tyre-5.jpg"}
          />
        </div>
      </div>
      <div className="col-6 col-md-4 mt-4">
        <div className="card-custom">
          <Image
            width={100}
            height={100}
            alt="GK Truck Tyres"
            className="images-img"
            src={"/tyre-6.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default Images;
