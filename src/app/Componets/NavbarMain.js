import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import {FaBars} from 'react-icons/fa'
import Header from './Header';
function NavbarMain() {
  return (
    <>
    <Header/>

    <nav className="navbar navbar-color p-0 sticky-top nav-bg  navbar-expand-lg ">
    <div className="container-fluid">
      <Link className="navbar-brand p-0" href="/">
        <Image height={120} width={200} alt='GK Truck Tyres' className='Logo' src={'/Logo.png'}/>
      </Link>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
      >
      <FaBars/>
      </button>
      <div
        className="navbar-collapse collapse"
        id="navbarSupportedContent"
        style={{}}
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
        <div className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/contact">Contact Us
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" href="/services">Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/gallery">
              Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    <div class="offcanvas offcanvas-end canvas-bg  w-auto" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
  
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <h5 id="offcanvasRightLabel">GK Truck Tyres</h5>
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-5"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/gallery">
              Gallery
              </Link>
            </li>
          </ul>
  </div>
  </div>
  
  </>
  )
}

export default NavbarMain