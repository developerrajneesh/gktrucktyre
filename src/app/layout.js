import Head from "next/head";
import "./home.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GK Truck Tyres Services",
  name: "GK Truck Tyres Services",
  description:
    "Discover unparalleled quality and reliability with GK Truck Tyres Services. Our expert team ensures top-notch tire services, from installation to maintenance, keeping your fleet rolling smoothly. Trust us for exceptional performance, durability, and unmatched service. Drive with confidence – choose GK Truck Tyres Services for all your commercial tire needs.",
  keywords: [
    "Truck Tyres, Commercial Vehicle Tires, Heavy-Duty Tyres, Tyre Sales Australia, Fleet Tyre Solutions, Premium Truck Tires, Tire Brands, Tyre Maintenance, Safety Guidelines, Truck Accessories, Tyre Installation, Roadworthy Truck Tyres, Reliable Tyre Suppliers, Affordable Truck Tyres, Tire Size Guide, Off-Road Truck Tyres, All-Season Truck Tires, Truck Tyre Repair, Long-Haul Trucking Tires, Tyre Rotation, Balancing",
  ],
  applicationName: "GK Truck Tyres Services",
  openGraph: {
    title: "GK Truck Tyres Services",
    description:
      "Discover unparalleled quality and reliability with GK Truck Tyres Services. Our expert team ensures top-notch tire services, from installation to maintenance, keeping your fleet rolling smoothly. Trust us for exceptional performance, durability, and unmatched service. Drive with confidence – choose GK Truck Tyres Services for all your commercial tire needs.",
    url: "http://gktrucktyres.com.au/",
    siteName: "GK Truck Tyres Services",
    images: "/og-image.jpg",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  gtag("event", "page_view", {
    page_title: document.title,
    page_path: window.location.pathname,
  });
  return (
    <html lang="en">
      <body className={"main"}>{children}</body>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9ZJS4ME7JS"
      ></Script>
      {/* <!-- Google tag (gtag.js) -->
      <Script  id='G-9ZJS4ME7JS'>
     
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-9ZJS4ME7JS');
      </Script>
       */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></Script>
    </html>
  );
}
