import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const payload = await req.json();


  try {
    // Replace these with your email server details
    

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",  
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
        auth: {
          user: "info@gktrucktyres.com.au",
          pass: "Developer@123",
        },})


    // Get data from the request body
    const { email, name, phone, message} = payload;

    // Send the email
    const mailOptions = {
        from: "info@gktrucktyres.com.au",
        to: 'info@gktrucktyres.com.au',
        name: 'Gk Truck Tyres Services',
        subject: "Hi you got a new lead!",
        html: `<h3> Hi you got a new lead! </h3>
               <p>Name: ${name}</p>
               <p>Phone: ${phone}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>
              `,
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });

    // NextRequest.json({ success: true });
  } catch (error) {
    console.error(error);
    NextRequest.json({ success: false, error: 'Error sending email' });
  }

  return NextResponse.json(payload);
}
