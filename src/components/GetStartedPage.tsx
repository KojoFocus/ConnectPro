import Navbar from "./NavBar"; // Import the Navbar component
import { Link } from "react-router-dom"; // Import Link for routing

const GetStartedPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-gradient-to-r from-[#036082] to-[#023347] text-white px-6 md:px-16">
        <br></br>
        <br></br>
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-8 text-[#F4A261]">
          Let’s Build Your Dream Business
        </h1>
        <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          You’re just a step away from turning your vision into reality. Fill out
          the form below, and let’s get started!
        </p>
        
        {/* Form Section */}
        <div className="bg-white text-[#036082] rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Get Started Form
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-[#036082]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-[#036082]"
                required
              />
            </div>
            <div>
              <label htmlFor="idea" className="block text-sm font-medium">
                Business Idea (Optional)
              </label>
              <textarea
                id="idea"
                placeholder="Briefly describe your business idea (if any)"
                rows={4}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-[#036082]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F4A261] text-white py-3 rounded-md hover:bg-[#e08c4a] transition duration-300 font-semibold"
            >
              Submit & Get Started
            </button>
          </form>
        </div>

        {/* Back to Home Section */}
        <div className="text-center mt-8">
          <Link to="/">
            <button className="btn bg-transparent border-2 border-[#F4A261] text-[#F4A261] px-6 py-3 rounded-md hover:bg-[#F4A261] hover:text-white transition duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetStartedPage;
