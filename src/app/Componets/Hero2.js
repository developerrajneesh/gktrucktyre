import Image from "next/image";
import React from "react";

function Hero2() {
  return (
    <div className="row m-0 p-0 p-md-5">
      <div className="col-12 col-md-6  p-5 pe-md-0 align-self-center">
        <h1>
          Emergency Truck Tyre Assistance: 24/7 Support to Keep You Moving
        </h1>
        <p>
          When your truck's tyres encounter unexpected trouble, time is of the
          essence. Our 24/7 Emergency Truck Tyre Assistance at GK Truck Tyres
          Services is your dedicated lifeline, ensuring you remain on the move,
          regardless of the hour or location. Our swift, well-equipped response
          team is poised to tackle flat tyres, blowouts, and more, reducing
          downtime, and minimizing disruptions to your operations. Count on us
          for cost-effective, round-the-clock support—your dependable partner
          for uninterrupted journeys.
        </p>{" "}
      </div>
      <div className="col-12 col-md-6 p-5  ">
        <Image
          height={400}
          className="img-fluid"
          width={600}
          src={"/hero-2.jpg"}
        />
      </div>
    </div>
  );
}

export default Hero2;
