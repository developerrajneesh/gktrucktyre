import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="d-flex gap-sm-3 flex-wrap px-3 justify-content-between">
      <Link
        target="_blank"
        className="text-decoration-none text-black"
        href="tel:+610426010203"
      >
        <p style={{ fontSize: "14px" }} className="m-0">
          {" "}
          Phone: +61 0426010203
        </p>
      </Link>
      <Link
        target="_blank"
        className="text-decoration-none text-black"
        href="mailto:info@gktrucktyres.com.au"
      >
        <p style={{ fontSize: "14px" }} className="m-0">
          Email: info@gktrucktyres.com.au
        </p>
      </Link>
    </div>
  );
}

export default Header;
