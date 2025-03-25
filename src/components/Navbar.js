import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Influencer Agency</h1>
      <ul className="flex gap-6">
        <li><Link className="hover:text-blue-500" to="/">Home</Link></li>
        <li><Link className="hover:text-blue-500" to="/services">Services</Link></li>
        <li><Link className="hover:text-blue-500" to="/about">About</Link></li>
        <li><Link className="hover:text-blue-500" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
