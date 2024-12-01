import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-[#023347]"> {/* Applied text color globally */}
      <div className="collapse bg-[#B0D0D3] m-0 p-0">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={handleToggle}
          className="hidden"
        />
        <div
          className="collapse-title text-xl font-medium cursor-pointer"
          onClick={handleToggle}
        >
          <div className="flex items-center justify-between">
            <span>CONTACT US</span>
            {isOpen ? (
              <FaChevronUp className="text-xl text-sky-500" />
            ) : (
              <FaChevronDown className="text-xl text-sky-500" />
            )}
          </div>
          <div className="w-full h-[1px] bg-sky-500 mt-2"></div>
        </div>
        {isOpen && (
          <div className="collapse-content p-4">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              Have questions or need more information? Feel free to reach out to us via the contact form below
              or through our social media channels.
            </p>

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-medium text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="font-medium text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#F4A261] text-white font-semibold rounded-md hover:bg-[#e08c4a] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              >
                Send Message
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="hover:text-sky-600">Facebook</a>
                <a href="https://twitter.com" className="hover:text-sky-600">Twitter</a>
                <a href="https://instagram.com" className="hover:text-sky-600">Instagram</a>
              </div>
            </div>

            {/* Additional Contact Information */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
              <p className="mb-2">
                Email: <a href="mailto:info@example.com" className="text-sky-500">info@example.com</a>
              </p>
              <p>
                Phone: <a href="tel:+1234567890" className="text-sky-500">+1 (234) 567-890</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
