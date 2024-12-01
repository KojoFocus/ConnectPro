import { useState } from "react";
import {
  FaHome,
  FaStar,
  FaInfoCircle,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     <div className="hero bg-gradient-to-r from-[#036082] to-[#023347] w-full h-[2/3] flex flex-col items-center justify-between py-8">

        {/* Navbar Section */}
        <div className="flex w-full h-[100px] justify-between items-center px-6 md:px-10">
          <img
            src={logo}
            className="max-w-[80px] md:max-w-[100px] h-auto"
            alt="Logo"
          />
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            <li>
              <a
                href="#home"
                className="flex items-center text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
              >
                <FaHome className="mr-2" />
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="flex items-center text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
              >
                <FaStar className="mr-2" />
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
              >
                <FaInfoCircle className="mr-2" />
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
              >
                <FaPhoneAlt className="mr-2" />
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#F4A261] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-20"
            onClick={() => setMenuOpen(false)}
          >
            {/* Menu */}
            <div
              className="absolute top-[100px] right-0 p-4 w-56 bg-base-200 bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent click event from closing the menu
            >
              <ul className="menu rounded-box space-y-4">
                <li>
                  <a
                    href="#home"
                    className="flex items-center text-[#F4A261] text-lg font-medium hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaHome className="mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="flex items-center text-[#F4A261] text-lg font-medium hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaStar className="mr-2" />
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="flex items-center text-[#F4A261] text-lg font-medium hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaInfoCircle className="mr-2" />
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center text-[#F4A261] text-lg font-medium hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaPhoneAlt className="mr-2" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="hero-content flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-6 md:px-10 mt-6 lg:mt-0">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl text-[#F4A261] font-bold">
              Empowering Entrepreneurs
            </h1>
            <p className="py-4 md:py-6 text-sm md:text-base text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi
              <br />
              exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="btn bg-[#F4A261] text-[#036082] px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-[#e08c4a] transition duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="flex-1 mb-6 lg:mb-0">
            <img
              src={logo}
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-sm rounded-lg shadow-2xl"
              alt="Hero Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
