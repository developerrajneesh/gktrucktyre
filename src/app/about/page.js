import React from 'react';
import NavbarMain from '../Componets/NavbarMain';
import Footer from '../Componets/Footer';
import Image from 'next/image';

// Import your images if needed


const AboutUsPage = () => {
  return (
    <>
    <NavbarMain/>
    <div className="container mt-5">
      <h1 className='text-center'>About Us</h1>
      <p className='text-center'>
        Welcome to GK Truck Tyres Service, your trusted partner in the world of
        commercial truck tire solutions. With a passion for <br /> excellence and a
        commitment to keeping your fleet on the road, we have established
        ourselves <br /> as the go-to destination for tire sales, installation, repair,
        and maintenance.
      </p>

     
      <div className="row">
        <div className="col-md-6">
          <Image width={500} height={500} className='img-fluid'src={'/aboutus.png'} alt="Truck"  />
        </div>
        <div className="col-md-6 align-self-center">
        <h2>Our Story</h2>
          <p>
            GK Truck Tyres Service was founded with a simple yet powerful vision:
            to provide superior tire services that enhance the performance,
            safety, and efficiency of commercial vehicles. Our journey began with
            a small team of dedicated professionals who shared a common goal - to
            support the trucking industry with unmatched tire expertise.
          </p>
        </div>
      </div>

      <p className='pt-3'>
        Over the years, we've grown and evolved, but our core values have
        remained the same. We pride ourselves on delivering quality products and
        exceptional service while building lasting relationships with our
        customers. Our success is a reflection of the trust you've placed in us,
        and we're committed to exceeding your expectations at every turn.
      </p>

      <h2>Our Commitment</h2>
      <ul>
        <li>
          <strong>Quality:</strong> We offer a carefully curated selection of
          top-tier truck tires, designed to withstand the rigors of the road and
          deliver reliable performance.
        </li>
        <li>
          <strong>Expertise:</strong> Our team of skilled technicians and tire
          specialists are passionate about their work and dedicated to ensuring
          that your fleet is equipped with the right tires for the job.
        </li>
        <li>
          <strong>Customer Satisfaction:</strong> Your satisfaction is our
          ultimate goal. We listen to your unique needs and provide tailored
          solutions that keep your business moving forward.
        </li>
        <li>
          <strong>Reliability:</strong> We understand the importance of timely
          service. Whether it's routine maintenance, emergency repairs, or expert
          advice, you can count on us to be there when you need us.
        </li>
        <li>
          <strong>Competitive Value:</strong> We offer competitive pricing
          without compromising on quality, helping you manage your operational
          costs efficiently.
        </li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        Our vision is to be the driving force behind your fleet's success. We aim
        to continually innovate, adapt, and expand our services to meet the
        evolving needs of the trucking industry. By providing superior tire
        solutions, we want to contribute to your success by keeping your vehicles
        on the road and performing at their best.
      </p>

      <h2>Contact Us</h2>
      <p>
        We thank you for choosing GK Truck Tyres Service as your partner for all
        your truck tire needs. If you have any questions, require more
        information, or want to discuss how we can assist your fleet, please
        don't hesitate to reach out to us. We look forward to the opportunity to
        serve you.
      </p>

      <p>With GK Truck Tyres Service, your journey on the road to success begins with us.</p>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUsPage;
