import Head from 'next/head'
import './home.css'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import Script from 'next/script';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GK Truck Tyres Services',
  description: 'Discover unparalleled quality and reliability with GK Truck Tyres Services. Our expert team ensures top-notch tire services, from installation to maintenance, keeping your fleet rolling smoothly. Trust us for exceptional performance, durability, and unmatched service. Drive with confidence – choose GK Truck Tyres Services for all your commercial tire needs.',
}

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
     
      <body className={'main'}>{children}</body>
      
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script>
    </html>
  )
}