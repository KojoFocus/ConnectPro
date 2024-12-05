import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const GetInvolved = () => {
  const [isOpen, setIsOpen] = useState(false); // Track collapse open/close state

  const handleToggle = () => setIsOpen((prev) => !prev); // Toggle state

  return (
    <div className="collapse bg-white text-black mx-0 px-4 rounded-none">
      <input
        type="checkbox"
        checked={isOpen} // Sync state with checkbox for control
        onChange={handleToggle}
        className="hidden"
        aria-label="Toggle Get Involved Section"
      />
      <div
        className="collapse-title text-xl font-medium cursor-pointer"
        onClick={handleToggle} // Toggle on title click
        role="button"
        aria-expanded={isOpen} // Improve accessibility
        aria-controls="get-involved-content"
      >
        <div className="flex items-center justify-between">
          <span className="text-[#F4A261]">GET INVOLVED</span>
          {isOpen ? (
            <FaChevronUp className="text-xl text-[#F4A261]" />
          ) : (
            <FaChevronDown className="text-xl text-[#F4A261]" />
          )}
        </div>
        <div className="w-full h-[1px] bg-[#F4A261] mt-2"></div>
      </div>
      <div
        id="get-involved-content"
        className={`collapse-content p-4 mx-0 ${isOpen ? "block" : "hidden"}`}
        aria-hidden={!isOpen} // Improve accessibility by hiding content when collapsed
      >
        {/* Section Title */}
        <h2 className="text-2xl font-semibold mb-4 text-[#F4A261]">How You Can Get Involved</h2>
        <p className="text-base text-black mb-4">
          We welcome anyone who shares our mission to help entrepreneurs and communities grow.
          Here are a few ways you can contribute and make a difference.
        </p>

        {/* Card Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Volunteer Card */}
          <div className="bg-gradient-to-r from-[#036082] to-[#023347] shadow-xl rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-300">
            <div className="relative">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Volunteer"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#036082] to-[#023347] opacity-30"></div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-black mb-2">Volunteer with Us</h4>
              <p className="text-black">
                Volunteering is a great way to give back to the community. Join our network of volunteers
                who help mentor, teach, and guide budding entrepreneurs.
              </p>
            </div>
          </div>

          {/* Donate Card */}
          <div className="bg-gradient-to-r from-[#036082] to-[#023347] shadow-xl rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-300">
            <div className="relative">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Donate"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#036082] to-[#023347] opacity-30"></div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Donate to Support</h4>
              <p className="text-white">
                Your donations help provide critical resources, funding, and training to those who need it most.
                Together, we can build a better future for entrepreneurs.
              </p>
            </div>
          </div>

          {/* Partner Card */}
          <div className="bg-gradient-to-r from-[#036082] to-[#023347] shadow-xl rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-300">
            <div className="relative">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Partner"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#036082] to-[#023347] opacity-30"></div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Become a Partner</h4>
              <p className="text-white">
                Partnering with us gives your organization the chance to create lasting impact in local communities
                by supporting young entrepreneurs through mentorship and resources.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Involvement Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#F4A261] mb-3">Other Ways to Get Involved:</h3>
          <ul className="list-disc pl-5 text-white">
            <li>Host an event to raise awareness about entrepreneurship.</li>
            <li>Provide mentorship and guidance to entrepreneurs in your area of expertise.</li>
            <li>Help us spread the word on social media to encourage more participation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
