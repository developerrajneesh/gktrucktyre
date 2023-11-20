import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
function Footer() {
  return (
    <div className="bg-dark text-white mt-5 text-cream-color">
      <footer>
        <div className=" pt-1">
          <div className="row m-0 mt-2">
            <div className="col-6 col-md-4 footer-items d-flex  justify-content-center">
              <div>
                <h2>Our Services </h2>
                <li className="li-hover">24-7 Breakdown </li>
                <li className="li-hover">Mobile Tyre Fitting </li>
                <li className="li-hover">Tyre Diagnosting </li>
                <li className="li-hover">New and Used Tyres </li>
                <li className="li-hover">Jump Start Service </li>
              </div>
            </div>
            <div className="col-6 col-md-4 footer-items d-flex  justify-content-center">
              <div>
                <h2>Important Links</h2>
                <li className="li-hover">Home </li>
                <li className="li-hover">About Us </li>
                <li className="li-hover">Contact Us </li>
                <li className="li-hover">Services </li>
                <li className="li-hover">Gallery </li>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-3 mt-md-0 footer-items  d-flex  justify-content-center">
              <div>
                <h2>Connect Us</h2>
                <Link
                  target="_blank"
                  className="text-decoration-none text-light"
                  href="tel:+610426010203"
                >
                  {" "}
                  <li className="li-hover">
                    <FaPhoneAlt className="me-3" size={18} /> +61 0426010203{" "}
                  </li>
                </Link>
                <Link
                  target="_blank"
                  className="text-decoration-none text-light"
                  href="tel:+610450146009"
                >
                  {" "}
                  <li className="li-hover mt-1">
                    {" "}
                    <FaPhoneAlt className="me-3" size={18} /> +61 0450146009{" "}
                  </li>
                </Link>
                <Link
                  target="_blank"
                  className="text-decoration-none text-light "
                  href="mailto:info@gktrucktyres.com.au"
                >
                  {" "}
                  <li className="li-hover mt-1">
                    <MdEmail className="me-4" size={20} />
                    info@gktrucktyres.com.au
                  </li>
                </Link>
                <li className="li-hover mt-2">
                  <Link
                    target="_blank"
                    href={
                      "https://www.facebook.com/people/GK-Truck-Tyres-Services/61551724389577/?mibextid=LQQJ4d"
                    }
                    className="text-decoration-none text-primary"
                  >
                    <CiFacebook className="me-3" size={33} />{" "}
                  </Link>{" "}
                  <Link
                    target="_blank"
                    className="text-decoration-none text-danger"
                    href={
                      "https://www.instagram.com/gk_truck_tyres/?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
                    }
                  >
                    <BsInstagram className="me-3" size={24} />{" "}
                  </Link>{" "}
                  <Link
                  target="_blank"
                    href={
                      "https://www.tiktok.com/@gktrucktyre?_t=8gXx9pGen4i&_r=1"
                    }
                    className="text-decoration-none text-info"
                  >
                    <FaTiktok className="me-3" size={24} />
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-1" />
        <p className="text-center m-0 pb-1 ">
          {" "}
          Copyright © 2023 <b className="me-md-3">GK Truck Tyres</b> Developed
          by Developer Rajneesh
        </p>
      </footer>
    </div>
  );
}

export default Footer;
