const GetInvolved = () => {
  return (
    <>
    
      {/* Title Section */}
      <div className="bg-[#036082] text-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-[#F4A261]">GET INVOLVED</h2>
        <p className="text-base leading-relaxed text-white mt-4">
          We welcome anyone who shares our mission to help entrepreneurs and
          communities grow. Here are a few ways you can contribute and make a
          difference.
        </p>
      </div>

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
              Volunteering is a great way to give back to the community. Join
              our network of volunteers who help mentor, teach, and guide budding
              entrepreneurs.
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
              training to those who need it most. Together, we can build a better
              future for entrepreneurs.
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
              Partnering with us gives your organization the chance to create a
              lasting impact in local communities by supporting young
              entrepreneurs through mentorship and resources.
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
          <li>Provide mentorship and guidance to entrepreneurs in your area of expertise.</li>
          <li>Help us spread the word on social media to encourage more participation.</li>
        </ul>
      </div>
    
    </>
  );
};

export default GetInvolved;
