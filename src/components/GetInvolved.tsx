import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons

const GetInvolved = () => {
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
            <span>GET INVOLVED</span>
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
            {/* Detailed content for Get Involved */}
            <h2 className="text-2xl font-semibold mb-4">How You Can Get Involved</h2>
            <p className="mb-4">
              We welcome anyone who shares our mission to help entrepreneurs and communities grow.
              Here are a few ways you can contribute and make a difference.
            </p>
            
            {/* Cards Section */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Volunteering Card */}
              <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder for image
                    alt="Volunteer"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <h4 className="text-lg font-semibold mb-2">Volunteer with Us</h4>
                  <p>
                    Volunteering is a great way to give back to the community. Join our network of volunteers
                    who help mentor, teach, and guide budding entrepreneurs.
                  </p>
                </div>
              </div>

              {/* Donate Card */}
              <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder for image
                    alt="Donate"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <h4 className="text-lg font-semibold mb-2">Donate to Support</h4>
                  <p>
                    Your donations help provide critical resources, funding, and training to those who need it most. 
                    Together, we can build a better future for entrepreneurs.
                  </p>
                </div>
              </div>

              {/* Partner Card */}
              <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder for image
                    alt="Partner"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <h4 className="text-lg font-semibold mb-2">Become a Partner</h4>
                  <p>
                    Partnering with us gives your organization the chance to create lasting impact in local communities
                    by supporting young entrepreneurs through mentorship and resources.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Involvement Options */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Other Ways to Get Involved:</h3>
              <ul className="list-disc pl-5">
                <li>Host an event to raise awareness about entrepreneurship.</li>
                <li>Provide mentorship and guidance to entrepreneurs in your area of expertise.</li>
                <li>Help us spread the word on social media to encourage more participation.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GetInvolved;
