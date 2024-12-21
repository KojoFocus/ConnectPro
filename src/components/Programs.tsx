import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Programs = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track collapse open/close

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the open state
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#036082] to-[#023347] text-white px-6 md:px-16 py-2">
      <div className="bg-[#036082] text-white rounded-lg shadow-lg">
        <div
          className="collapse-title text-xl font-semibold cursor-pointer"
          onClick={handleToggle}
        >
          <div className="flex items-center justify-between">
            <span className="text-[#F4A261]">OUR PROGRAMS</span>
            {isOpen ? (
              <FaChevronUp className="text-xl text-[#F4A261]" />
            ) : (
              <FaChevronDown className="text-xl text-[#F4A261]" />
            )}
          </div>
        </div>

        {isOpen && (
          <div className="mt-4">
            {/* Detailed content for Connect Pro program */}
            <h3 className="text-2xl font-bold mb-4 text-[#F4A261]">
              Connect Pro
            </h3>
            <p className="text-base leading-relaxed">
              Connect Pro is designed to bridge the gap between budding
              entrepreneurs and the resources they need to grow and thrive.
            </p>
            <p className="mt-4">
              The program connects entrepreneurs to a network of investors,
              mentors, and peers to help foster innovation and business growth.
            </p>
            <p className="mt-4">
              Our goal is to ensure that entrepreneurs have the tools and
              support they need to succeed, with a focus on sustainable business
              practices.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-[#F4A261]">
                Program Benefits:
              </h4>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>Access to funding opportunities</li>
                <li>Networking with industry experts</li>
                <li>Personalized mentorship and guidance</li>
                <li>Workshops and training sessions</li>
                <li>Exposure to a wide range of business tools and resources</li>
              </ul>
            </div>

            {/* Cards Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Connect Pro Program"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#036082] mb-2">
                    Program Overview
                  </h4>
                  <p className="text-sm text-gray-700">
                    An overview of the Connect Pro program, including all the
                    key features and how it helps entrepreneurs grow.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Networking Opportunities"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#036082] mb-2">
                    Networking Opportunities
                  </h4>
                  <p className="text-sm text-gray-700">
                    Connect with mentors and investors to take your business to
                    the next level. Build strong professional connections.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Workshops & Training"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#036082] mb-2">
                    Workshops & Training
                  </h4>
                  <p className="text-sm text-gray-700">
                    Participate in hands-on workshops to develop critical skills
                    and knowledge for business success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;
