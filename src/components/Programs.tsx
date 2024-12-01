import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons

const Programs = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track collapse open/close

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="collapse bg-[#F3EFE8]">
        <input
          type="checkbox"
          checked={isOpen} // Use state to control the checkbox
          onChange={handleToggle}
          className="hidden"
        />
        <div
          className="collapse-title text-xl font-medium cursor-pointer"
          onClick={handleToggle} // Toggle on title click
        >
          <div className="flex items-center justify-between"> {/* Flex to align text and icon */}
            <span>OUR PROGRAMS</span>
            {isOpen ? (
              <FaChevronUp className="text-xl text-sky-500" />
            ) : (
              <FaChevronDown className="text-xl text-sky-500" />
            )}
          </div>
          {/* Line under the title */}
          <div className="w-full h-[1px] bg-sky-500 mb-0  mt-2"></div>
        </div>
        {isOpen && (
          <div className="collapse-content p-4">
            {/* Detailed content for Connect Pro program */}
            <h2 className="text-2xl font-semibold mb-4">Connect Pro</h2>
            <p>
              Connect Pro is designed to bridge the gap between budding entrepreneurs and the resources they need to grow and thrive.
            </p>
            <p className="mt-2">
              The program connects entrepreneurs to a network of investors, mentors, and peers to help foster innovation and business growth.
            </p>
            <p className="mt-2">
              Our goal is to ensure that entrepreneurs have the tools and support they need to succeed, with a focus on sustainable business practices.
            </p>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Program Benefits:</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Access to funding opportunities</li>
                <li>Networking with industry experts</li>
                <li>Personalized mentorship and guidance</li>
                <li>Workshops and training sessions</li>
                <li>Exposure to a wide range of business tools and resources</li>
              </ul>
            </div>

            {/* Card Section */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder for image
                    alt="Connect Pro Program"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <h4 className="text-lg font-semibold mb-2">Program Overview</h4>
                  <p>
                    An overview of the Connect Pro program, including all the key features and how it helps entrepreneurs grow.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder for image
                    alt="Networking Opportunities"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <h4 className="text-lg font-semibold mb-2">Networking Opportunities</h4>
                  <p>
                    Connect with mentors and investors to take your business to the next level. Build strong professional connections.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder for image
                    alt="Workshops & Training"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <h4 className="text-lg font-semibold mb-2">Workshops & Training</h4>
                  <p>
                    Participate in hands-on workshops to develop critical skills and knowledge for business success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Programs;
