import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../Assets/Logo/logo10-removebg-preview.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={icon} alt="Logo" className="h-13 w-20" />{" "}
          {/* Adjust the path and height as necessary */}
        </div>
        {/* Left side - Links */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon */}
          <button className="text-white lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Links for larger screens */}
          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link
                to=""
                className="text-gray-100 text-xl font-bold p-4 hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/AboutSection"
                className="text-gray-100 text-xl font-bold p-4 hover:text-gray-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Contact_us"
                className="text-gray-100 text-xl font-bold p-4 hover:text-gray-400"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side - Search box, Login, Register */}
        <div className="flex items-center space-x-4 ">
          {/* Search Box for larger screens */}
          <input
            type="text"
            placeholder="Search"
            className="hidden lg:block px-2 py-1 rounded bg-gray-700 text-white"
          />

          {/* Login and Register buttons */}
          <Link
            to="/login"
            className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-gray-700 font-bold"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 text-white  px-3 py-2 rounded hover:bg-gray-700 font-bold"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden mt-4 space-y-2">
          <li>
            <Link to="/" className="block text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block text-white hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-white hover:text-gray-400"
            >
              Contact Us
            </Link>
          </li>

          {/* Mobile Search Box */}
          <li>
            <input
              type="text"
              placeholder="Search"
              className="block w-full px-2 py-1 rounded bg-gray-700 text-white"
            />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
