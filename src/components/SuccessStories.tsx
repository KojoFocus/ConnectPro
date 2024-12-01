import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SuccessStories = () => {
  const [isOpen, setIsOpen] = useState(false); // Track collapse open/close state

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse bg-gradient-to-r from-[#036082] to-[#023347] text-white mx-0 px-4 rounded-lg shadow-md">
      <input
        type="checkbox"
        checked={isOpen} // Control the checkbox state
        onChange={handleToggle} // Toggle state when checkbox changes
        className="hidden"
        aria-label="Toggle success stories section"
      />
      <div
        className="collapse-title text-xl font-medium cursor-pointer"
        onClick={handleToggle} // Toggle on title click
      >
        <div className="flex items-center justify-between">
          <span className="text-[#F4A261]">SUCCESS STORIES</span>
          {isOpen ? (
            <FaChevronUp className="text-xl text-[#F4A261]" />
          ) : (
            <FaChevronDown className="text-xl text-[#F4A261]" />
          )}
        </div>
        <div className="w-full h-[1px] bg-[#F4A261] mt-2"></div>
      </div>
      {isOpen && (
        <div className="collapse-content p-4 mx-0">
          {/* Section Title */}
          <h2 className="text-2xl font-semibold mb-4 text-[#F4A261]">Our Success Stories</h2>
          <p className="text-base text-white">
            Our programs have helped many entrepreneurs achieve their goals and grow their businesses. Here are a few inspiring success stories from participants in our programs.
          </p>

          {/* Card Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-[#036082] to-[#023347] shadow-xl rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-300">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Entrepreneur Success"
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#036082] to-[#023347] opacity-30"></div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2">John Doe's Story</h4>
                <p className="text-white">
                  John, a small business owner, participated in our Connect Pro program and successfully secured funding to expand his operations, resulting in a 50% increase in sales.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-[#036082] to-[#023347] shadow-xl rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-300">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Networking Success"
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#036082] to-[#023347] opacity-30"></div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Jane Smith's Networking Success</h4>
                <p className="text-white">
                  Jane leveraged the networking opportunities in our program, partnering with key industry players, leading to a collaboration that doubled her customer base within six months.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-r from-[#036082] to-[#023347] shadow-xl rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-300">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Training Impact"
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#036082] to-[#023347] opacity-30"></div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Training Success: Empowering Entrepreneurs</h4>
                <p className="text-white">
                  Through our specialized training sessions, many entrepreneurs have gained critical business skills that helped them manage their finances better and scale their operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessStories;
