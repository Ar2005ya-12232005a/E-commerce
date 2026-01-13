import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const [visible, setVisible] = useState(false)
  return (
    <div className = "flex items-center justify-between py-5 font-medium">
       <Link to="/"> <img src = {assets.logo} className = "w-36" alt = "logo"/></Link>

        <ul className = 'hidden sm:flex gap-5 text-sm text-gray-700'>
         <NavLink to="/" className = "flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className = "w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
         </NavLink>

          <NavLink to="/collection" className = "flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className = "w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
         </NavLink>


          <NavLink to="/about" className = "flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className = "w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
         </NavLink>

          <NavLink to="/contact" className = "flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className = "w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
         </NavLink>
         
        </ul>

        <div className = "flex items-center gap-6">
          <img src = {assets.search_icon} className = "w-5 cursor-pointer" alt = "search_icon"/>
        </div>

       <div className="flex items-center gap-3">
  
  {/* Profile dropdown */}
  <div className="group relative">
    <img
      src={assets.profile_icon}
      className="w-5 cursor-pointer"
      alt="profile_icon"
    />

    <div className="hidden group-hover:flex flex-col absolute right-0 mt-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg gap-2">
      <p className="cursor-pointer hover:text-black">My Profile</p>
      <p className="cursor-pointer hover:text-black">Orders</p>
      <p className="cursor-pointer hover:text-black">Logout</p>
    </div>
  </div>

  <Link to= "/cart" className = "relative">
  <img src = {assets.cart_icon} className = "w-5 min-w-5" alt = "cart"/>
  <p className = "absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
  </Link>

  <img onClick = {()=>setVisible(true)} src = {assets.menu_icon} className = "w-5 cursor-pointer sm:hidden"></img>
  
</div>

<div
  className={`fixed top-0 right-0 h-full bg-white z-50 shadow-lg transition-all duration-200 ${
    visible ? "w-full" : "w-0"
  } overflow-hidden`}
>
  <div className="flex flex-col p-6 gap-4 text-gray-600">
    <button
      onClick={() => setVisible(false)}
      className="self-end text-xl font-bold cursor-pointer"
    >
      ✕
    </button>

    <NavLink className = "py-2 pl-6 border" to="/" onClick={() => setVisible(false)}>HOME</NavLink>
    <NavLink className = "py-2 pl-6 border" to="/collection" onClick={() => setVisible(false)}>COLLECTION</NavLink>
    <NavLink className = "py-2 pl-6 border" to="/about" onClick={() => setVisible(false)}>ABOUT</NavLink>
    <NavLink className = "py-2 pl-6 border" to="/contact" onClick={() => setVisible(false)}>CONTACT</NavLink>
  </div>
</div>

    </div>
  )
}

export default Navbar;