import React from 'react'

function Footer() {
  return (
    <div className="bg-dark text-white mt-5 text-cream-color">
    <foote>
      <div className=" pt-1">
        <div className="row m-0 mt-2">
          <div className="col-6 col-md-4 footer-items">
            <h2>Our Services </h2>
            <li className="li-hover">24-7 Breakdown </li>
            <li className="li-hover">Mobile Tyre Fitting </li>
            <li className="li-hover">Tyre Diagnosting </li>
            <li className="li-hover">New and Used Tyres </li>
            <li className="li-hover">Jump Start Service </li>
          </div>
          <div className="col-6 col-md-4 footer-items">
            <h2>Important Links</h2>
            <li className="li-hover">Home </li>
            <li className="li-hover">About Us </li>
            <li className="li-hover">Contact Us </li>
            <li className="li-hover">Services </li>
            <li className="li-hover">Gallery </li>
          </div>
          <div className="col-6 col-md-4 footer-items">
            <h2>Connect Us</h2>
            <li className="li-hover">Lorem ipsum </li>
            <li className="li-hover">Lorem ipsum </li>
            <li className="li-hover">Lorem ipsum </li>
            <li className="li-hover">Lorem ipsum </li>
          </div>
          
        </div>
      </div>
      <hr className="mb-1" />
      <p className="text-center m-0 pb-1 ">
        {" "}
        Copyright © 2023 <b className='me-md-3'>GK Truck Tyres
 </b>  Developed by Developer Rajneesh
      </p>
    </foote>
  </div>
  
  )
}

export default Footer