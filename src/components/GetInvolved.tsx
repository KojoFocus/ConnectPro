import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const GetInvolved = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track collapse open/close

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse bg-[#B0D0D3] mx-0 px-4 rounded-none mt-0 pt-0"> {/* Added pt-0 here */}
      <input
        type="checkbox"
        checked={isOpen} // Control open/close state
        onChange={handleToggle}
        className="hidden"
      />
      <div
        className="collapse-title text-xl font-medium cursor-pointer pt-0" // Added pt-0 here
        onClick={handleToggle} // Toggle on title click
      >
        <div className="flex items-center justify-between">
          <span className="text-[#023347]">GET INVOLVED</span>
          {isOpen ? (
            <FaChevronUp className="text-xl text-sky-500" />
          ) : (
            <FaChevronDown className="text-xl text-sky-500" />
          )}
        </div>
        {/* Decorative line */}
        <div className="w-full h-[1px] bg-sky-500 mt-2"></div>
      </div>
      {isOpen && (
        <div className="collapse-content p-0 m-0"> {/* Removed padding here */}
          {/* Section Title */}
          <h2 className="text-2xl font-semibold text-[#023347] mb-4">How You Can Get Involved</h2>
          <p className="text-[#023347] mb-4">
            We welcome anyone who shares our mission to help entrepreneurs and communities grow.
            Here are a few ways you can contribute and make a difference.
          </p>

          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Card 1: Volunteering */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Volunteer"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#023347] mb-2">Volunteer with Us</h4>
                <p className="text-[#023347]">
                  Volunteering is a great way to give back to the community. Join our network of volunteers
                  who help mentor, teach, and guide budding entrepreneurs.
                </p>
              </div>
            </div>

            {/* Card 2: Donate */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Donate"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#023347] mb-2">Donate to Support</h4>
                <p className="text-[#023347]">
                  Your donations help provide critical resources, funding, and training to those who need it most.
                  Together, we can build a better future for entrepreneurs.
                </p>
              </div>
            </div>

            {/* Card 3: Partner */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Partner"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#023347] mb-2">Become a Partner</h4>
                <p className="text-[#023347]">
                  Partnering with us gives your organization the chance to create lasting impact in local communities
                  by supporting young entrepreneurs through mentorship and resources.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Involvement Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#023347] mb-3">Other Ways to Get Involved:</h3>
            <ul className="list-disc pl-5 text-[#023347]">
              <li>Host an event to raise awareness about entrepreneurship.</li>
              <li>Provide mentorship and guidance to entrepreneurs in your area of expertise.</li>
              <li>Help us spread the word on social media to encourage more participation.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInvolved;
