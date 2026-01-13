import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
        <div className = "flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
   <div>
    <img src={assets.logo} alt=" " className = "mb-5 w-32"/>
    <p className =  "w-full text-gray-600 md:w-2/3">We craft style you can trust, made to last.
Comfort, quality, and care in every piece.
From your first click to final wear, we’re here.
Because great fashion deserves reliable support.</p>
   </div>

   <div>
    <p className = "text-xl font-medium mb-5">COMPANY</p>
    <ul className = "flex flex-col gap-1 text-gray-600">
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>

    </ul>
   </div>

   <div>
    <p className= "text-xl font-medium mb-5">GET IN TOUCH</p>
    <ul className = "flex flex-col gap-1 text-gray-600">
        <li>+1 426-373-783</li>
        <li>forever@gmail.com</li>

    </ul>
   </div>



        </div>

        <div>
            <hr/>
            <p className = "py-5 text-sm text-center">Copyright 2025@forever.com- All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;