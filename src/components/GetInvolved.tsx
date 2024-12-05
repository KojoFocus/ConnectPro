import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const GetInvolved = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track collapse open/close

  const handleToggle = () => setIsOpen((prev) => !prev); // Toggle state

  return (
    <div className="w-full bg-gradient-to-r from-[#036082] to-[#023347] text-white px-6 md:px-16 py-2">
      <div className="collapse bg-[#036082] text-white rounded-lg shadow-lg">
        <input
          type="checkbox"
          checked={isOpen} // Sync state with checkbox for control
          onChange={handleToggle}
          className="hidden"
          aria-label="Toggle Get Involved Section"
        />
        <div
          className="collapse-title text-xl font-semibold cursor-pointer"
          onClick={handleToggle}
          role="button"
          aria-expanded={isOpen}
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
          {/* <div className="w-full h-[1px] bg-[#F4A261] mt-2"></div> */}
        </div>
        {isOpen && (
          <div
            id="get-involved-content"
            className="collapse-content mt-4"
            aria-hidden={!isOpen}
          >
            {/* Section Title */}
            <h2 className="text-2xl font-bold mb-4 text-[#F4A261]">
              How You Can Get Involved
            </h2>
            <p className="text-base leading-relaxed text-white">
              We welcome anyone who shares our mission to help entrepreneurs and
              communities grow. Here are a few ways you can contribute and make
              a difference.
            </p>

            {/* Cards Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Volunteer Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Volunteer"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#036082] mb-2">
                    Volunteer with Us
                  </h4>
                  <p className="text-sm text-gray-700">
                    Volunteering is a great way to give back to the community.
                    Join our network of volunteers who help mentor, teach, and
                    guide budding entrepreneurs.
                  </p>
                </div>
              </div>

              {/* Donate Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Donate"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#036082] mb-2">
                    Donate to Support
                  </h4>
                  <p className="text-sm text-gray-700">
                    Your donations help provide critical resources, funding, and
                    training to those who need it most. Together, we can build a
                    better future for entrepreneurs.
                  </p>
                </div>
              </div>

              {/* Partner Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Partner"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#036082] mb-2">
                    Become a Partner
                  </h4>
                  <p className="text-sm text-gray-700">
                    Partnering with us gives your organization the chance to
                    create a lasting impact in local communities by supporting
                    young entrepreneurs through mentorship and resources.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Involvement Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#F4A261] mb-3">
                Other Ways to Get Involved:
              </h3>
              <ul className="list-disc pl-5 text-white">
                <li>Host an event to raise awareness about entrepreneurship.</li>
                <li>
                  Provide mentorship and guidance to entrepreneurs in your area
                  of expertise.
                </li>
                <li>
                  Help us spread the word on social media to encourage more
                  participation.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInvolved;
