import logo from '../assets/logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa"; // Import the scroll to top icon

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      
    
    <div className="bg-gradient-to-r from-[#036082] to-[#023347] text-white py-6 mt-0">
    
      <div className="container mx-auto px-6 py-0 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center sm:items-start">
            <img src={logo} className="max-w-[120px] mb-4" alt="Logo" />
            {/* <p className="text-sm md:text-base text-center sm:text-left">
              Empowering entrepreneurs with the resources and support needed for
              success. Join us today to take your business to the next level.
            </p> */}
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
                <span className="font-semibold">Phone:</span> +233 54 048 4052
              </li>
              <li className="text-sm">
                <span className="font-semibold">Email:</span> contact@connectpro.com
              </li>
              <li className="text-sm">
                <span className="font-semibold">Address:</span> 123 East Legon, Accra,
               Ghana
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#F4A261] pt-4 mt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ConnectPro. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#F4A261] text-[#023347] rounded-full p-2 shadow-lg hover:bg-[#e08c4a] transition duration-300"
      >
        {/* Set a smaller size for the scroll icon */}
        <FaArrowUp className="w-4 h-4" />  {/* Set width and height explicitly to 16px */}
      </button>
    </div>
    </>
  );
};

export default Footer;
