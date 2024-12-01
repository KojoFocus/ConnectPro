import logo from '../assets/logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#023347] text-white py-6 mt-10">
      <div className="container mx-auto px-6 py-0 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center sm:items-start">
            <img src={logo} className="max-w-[120px] mb-4" alt="Logo" />
            <p className="text-sm md:text-base text-center sm:text-left">
              Empowering entrepreneurs with the resources and support needed for
              success. Join us today to take your business to the next level.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm hover:text-[#F4A261] transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm hover:text-[#F4A261] transition duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm hover:text-[#F4A261] transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-[#F4A261] transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4A261] hover:text-[#e08c4a] transition duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4A261] hover:text-[#e08c4a] transition duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4A261] hover:text-[#e08c4a] transition duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4A261] hover:text-[#e08c4a] transition duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="font-semibold">Phone:</span> +1 234 567 890
              </li>
              <li className="text-sm">
                <span className="font-semibold">Email:</span> contact@yourcompany.com
              </li>
              <li className="text-sm">
                <span className="font-semibold">Address:</span> 123 Your Street, City,
                Country
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#F4A261] pt-4 mt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
