import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons

const SuccessStories = () => {
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
          <div className="flex items-center justify-between">
            {/* Flex to align text and icon */}
            <span>SUCCESS STORIES</span>
            {isOpen ? (
              <FaChevronUp className="text-xl text-sky-500" />
            ) : (
              <FaChevronDown className="text-xl text-sky-500" />
            )}
          </div>
          {/* Line under the title */}
          <div className="w-full h-[1px] bg-sky-500 mt-2"></div>
        </div>
        {isOpen && (
          <div className="collapse-content p-4">
            {/* Detailed content for Success Stories */}
            <h2 className="text-2xl font-semibold mb-4">Our Success Stories</h2>
            <p>
              Our programs have helped many entrepreneurs achieve their goals and grow their businesses. Here are a few inspiring success stories from participants in our programs.
            </p>
            
            {/* Card Section */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder for image
                    alt="Entrepreneur Success"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <h4 className="text-lg font-semibold mb-2">John Doe's Story</h4>
                  <p>
                    John, a small business owner, participated in our Connect Pro program and successfully secured funding to expand his operations, resulting in a 50% increase in sales.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder for image
                    alt="Networking Success"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <h4 className="text-lg font-semibold mb-2">Jane Smith's Networking Success</h4>
                  <p>
                    Jane leveraged the networking opportunities in our program, partnering with key industry players, leading to a collaboration that doubled her customer base within six months.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder for image
                    alt="Training Impact"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <h4 className="text-lg font-semibold mb-2">Training Success: Empowering Entrepreneurs</h4>
                  <p>
                    Through our specialized training sessions, many entrepreneurs have gained critical business skills that helped them manage their finances better and scale their operations.
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

export default SuccessStories;
