const SuccessStories = () => {
  return (
    <div className="bg-[#036082] text-white rounded-lg shadow-lg p-6 md:p-16 mt-8 mb-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#F4A261]">
          Our Success Stories
        </h2>
        <p className="text-base leading-relaxed mb-8">
          Our programs have helped many entrepreneurs achieve their goals
          and grow their businesses. Here are a few inspiring success stories
          from participants in our programs.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Entrepreneur Success"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-[#036082] mb-2">
                John Doe's Story
              </h4>
              <p className="text-sm text-gray-700">
                John, a small business owner, participated in our Connect
                Pro program and successfully secured funding to expand his
                operations, resulting in a 50% increase in sales.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Networking Success"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-[#036082] mb-2">
                Jane Smith's Networking Success
              </h4>
              <p className="text-sm text-gray-700">
                Jane leveraged the networking opportunities in our program,
                partnering with key industry players, leading to a
                collaboration that doubled her customer base within six
                months.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Training Impact"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-[#036082] mb-2">
                Training Success: Empowering Entrepreneurs
              </h4>
              <p className="text-sm text-gray-700">
                Through our specialized training sessions, many
                entrepreneurs have gained critical business skills that
                helped them manage their finances better and scale their
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
