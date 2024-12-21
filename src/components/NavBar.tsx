import { useState } from "react";
import {
  FaHome,
  FaStar,
  FaInfoCircle,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing
import logo from "../assets/logo.png"; // Import the logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
<div className="flex w-full h-[70px] bg-gradient-to-r from-[#036082] to-[#023347] justify-between items-center py-0 mt-0 mb-0 px-6 md:px-10">
        <img
          src={logo}
          className="max-w-[80px] md:max-w-[100px] h-auto"
          alt="Logo"
        />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          <li>
            <Link
              to="/"
              className="flex items-center text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/programs"
              className="flex items-center text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
            >
              <FaStar className="mr-2" />
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
            >
              <FaInfoCircle className="mr-2" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
            >
              <FaPhoneAlt className="mr-2" />
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-[#F4A261] text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-20"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="absolute top-[100px] right-0 p-4 w-56 bg-base-200 bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="menu rounded-box space-y-4">
                <li>
                  <Link
                    to="/"
                    className="flex items-center text-[#F4A261] text-lg font-medium hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaHome className="mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs"
                    className="flex items-center text-[#F4A261] text-lg font-medium hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaStar className="mr-2" />
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center text-[#F4A261] text-lg font-medium hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaInfoCircle className="mr-2" />
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex items-center text-[#F4A261] text-lg font-medium hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaPhoneAlt className="mr-2" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-[1px] bg-[#F4A261] mt-2"></div>
    </>
  );
};

export default Navbar;
