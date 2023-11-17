import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="row m-0 p-0 p-md-4 pb-md-0">
        <div className="col-12 col-md-6 p-5 pe-0 ">
          <Image style={{height:"400px",width:"90%", marginLeft:"10px"}} height={400} width={600} src={"/hero-3.jpg"} />
        </div>
        <div className="col-12 col-md-6  pe-4 ps-md-0 align-self-center">
          <h1>
            GK Truck Tyres Services - Your Trusted Partner for Top-Quality Tyres
          </h1>
          <p>
            When it comes to ensuring the smooth operation of your commercial
            trucking fleet, quality tyres are non-negotiable. At GK Truck Tyres
            Services, we've earned a reputation as the industry's go-to source
            for premium truck tyres and comprehensive services. Our commitment
            to your satisfaction begins with an extensive selection of top-tier
            tyres from renowned brands, tailored to meet the specific needs of
            your fleet.
          </p>
          <p>
            Our team of experts understands the unique demands of the trucking
            industry, and we are dedicated to helping you make the right tyre
            choices. From all-season to all-terrain, we have the perfect tyre
            for your trucks. Our services go beyond just sales; we offer
            professional installation, maintenance, alignment, and repair, all
            aimed at minimizing downtime and reducing operational costs. Trust
            GK Truck Tyres Services to keep your trucks rolling safely and
            efficiently.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
