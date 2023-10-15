import React from "react";
import NavbarMain from "../Componets/NavbarMain";
import Footer from "../Componets/Footer";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <NavbarMain />
      <div className="container">
      <h1 className="text-center m-5">Contact Us</h1>
      <div className="row m-0">
        <div className="col-12 col-md-6 mt-4 align-self-center">
          <h3 className="text-center">Get in Touch</h3>
        
          <h5 className="text-centerd">
            At GK Truck Tyres Service, we're here to assist you with all your
            commercial truck tire needs. Whether you have questions, need
            assistance, or want to schedule a service, our dedicated team is
            ready to help.
          </h5>
          <div className="row justify-content-centr">
            <div className="col-6 align-self-center pt-4">
              <h5>Phone Number:</h5>
              <p>+61 426 010 203</p>
              <h5>Email:</h5>
              <p> developer.rajneeshshukla@gmail.com</p>
              <h5>Address:</h5>
              <p>
                {" "}
                8 Hines Rd, <br />
                Wingfield SA 5013, <br /> Australia:
              </p>
            </div>
            <div  className="col-6">
              <Image src={'/contactus.png'} height={500} width={500} className="img-fluid"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 align-self-center">
          <form>
            <div className="row m-0 ">
              <div className="col-md-6 col-12 p-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control    border border-dark w-100  "
                  name="name"
                  id="name"
                  />
              </div>
              <div className="col-md-6 col-12 p-2">
                <label htmlFor="number">Phone</label>
                <input
                  type="number"
                  className="form-control    border-1 border-dark w-100 "
                  name="number"
                  id="number"
                  />
              </div>
            </div>
            <div className="p-2">
              <label htmlFor="number">Email</label>
              <input
                type="email"
                className="form-control    border-1 border-dark w-100 "
                name="number"
                id="number"
                />
            </div>
            <div className="p-2">
              <label htmlFor="number">Messege</label>
              <textarea
                name="message"
                id="message"
                className="form-control    border-1 border-dark w-100 "
                cols="30"
                rows="5"
                ></textarea>
            </div>
            <div className="p-2">
              <button className="btn btn-light w-100 ">Send Message</button>
            </div>
          </form>
        </div>
        </div>
        </div>
        <div className=" mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.6187549399328!2d138.54768519641414!3d-34.83718695513949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c734de8f899d%3A0x4cd5b3ab6d953e71!2sGK%20TRUCK%20TYRES%20SERVICES%20PTY%20LTD!5e0!3m2!1sen!2sin!4v1696601294292!5m2!1sen!2sin"
            width={"100%"}
            height={350}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
      

          
      <Footer />
    </div>
  );
}

export default Contact;
