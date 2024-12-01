import { FaLightbulb, FaChalkboardTeacher, FaBoxOpen, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing
import Navbar from "./NavBar"; // Match the casing exactly


const GettingStarted = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#036082] to-[#023347] text-white py-12 px-6 md:px-16">
      {/* Navbar from the Hero Section */}
      <Navbar />

      <h1 className="text-4xl md:text-5xl text-center font-bold mb-8 text-[#F4A261]">
        Getting Started with ConnectPro
      </h1>
      <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto">
        Your journey to building a thriving business begins here. Follow these simple steps to 
        move from idea to profit with our tailored solutions and expert support.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Step 1 */}
        <div className="bg-white text-[#036082] rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaLightbulb className="text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Start with Your Idea</h2>
          <p className="text-center text-sm">
            Every business starts with an idea. Let’s develop yours into a clear plan.
          </p>
        </div>
        {/* Step 2 */}
        <div className="bg-white text-[#036082] rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaChalkboardTeacher className="text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Get Expert Coaching</h2>
          <p className="text-center text-sm">
            Connect with mentors who will guide you every step of the way.
          </p>
        </div>
        {/* Step 3 */}
        <div className="bg-white text-[#036082] rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaBoxOpen className="text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Access Resources</h2>
          <p className="text-center text-sm">
            We provide the necessary materials, packaging solutions, and more.
          </p>
        </div>
        {/* Step 4 */}
        <div className="bg-white text-[#036082] rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaChartLine className="text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Grow Your Business</h2>
          <p className="text-center text-sm">
            With our support, your business can scale quickly and sustainably.
          </p>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link to="/">
          <button className="btn bg-[#F4A261] text-[#036082] px-6 py-3 rounded-md hover:bg-[#e08c4a] transition duration-300">
            Get Started Now
          </button>
        </Link>
      </div>

      {/* Footer from the Hero Section */}
     
    </div>
  );
};

export default GettingStarted;
