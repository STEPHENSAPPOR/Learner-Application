import React from 'react';
import { FiLogIn } from "react-icons/fi";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-3 rounded-sm bg-white shadow-sm">
      <div className="flex items-center space-x-6">
        <img src={logo} alt="Logo" className="h-5" />
        <div className="flex space-x-6 text-black text-sm font-medium">
          <a href="#" className="hover:text-gray-700">Home</a>
          <a href="#" className="hover:text-gray-700">Courses</a>
        </div>
      </div>
      
      <button className="flex items-center space-x-1 border border-blue-500 text-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-100 text-sm font-semibold">
        <span>Login</span>
        <FiLogIn size={14} />
      </button>
    </nav>
  );
};

export default NavBar;