import React from 'react';
import { FaPhone, FaBars } from 'react-icons/fa';
import logo1 from './../images/logo1.jpg';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-80 w-full z-20 fixed top-0 shadow-lg backdrop-blur-md">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4">
        {/* Logo */}
        <a className="flex items-center space-x-3">
          <img src={logo1} className="h-12 rounded-full shadow-md" alt="CoffeShop Logo" />
          <span className="text-3xl font-bold text-white tracking-wide">CoffeShop</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white text-lg font-medium hover:text-[#8B4513] transition duration-300">Home</a>
          <a href="#menu" className="text-white text-lg font-medium hover:text-[#8B4513] transition duration-300" >Menu</a>
          <a href="#about" className="text-white text-lg font-medium hover:text-[#8B4513] transition duration-300">About</a>
          <a href="#contact" className="text-white text-lg font-medium hover:text-[#8B4513] transition duration-300">Contact</a>
        </div>

        {/* Call & Mobile Menu */}
        <div className="flex items-center space-x-6">
          <a href="tel:5541251234" className="text-white text-lg flex items-center gap-2 hover:text-[#8B4513] transition duration-300">
            <FaPhone /> (+62) 831-1967-9808
          </a>
          <button className="md:hidden text-white text-2xl hover:text-[#8B4513] transition duration-300">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
