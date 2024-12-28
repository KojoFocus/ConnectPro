// import Navbar from "./NavBar"; // Import the correct Navbar
import { Link } from "react-router-dom"; // Import Link for routing
import logo from "../assets/logo.png"; // Import the logo

const HeroSection = () => {
  return (
    <>
    <div className="relative  bg-gradient-to-r from-[#036082] to-[#023347]  text-gray-800 m-0 p-2">
    <div className="w-full min-h-screen bg-gradient-to-r from-[#036082] to-[#023347] text-white mb-0 mt-0 py-0 px-6 md:px-16">
     

      <div className="hero-content flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-6 md:px-10 mt-6 lg:mt-0">
      
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl text-[#F4A261] font-bold">
            Connecting Ideas to Opportunities
          </h1>
          <p className="py-4 md:py-6 text-sm md:text-base text-white">
            Every business begins with an idea, but turning it into success 
            takes guidance and resources. At ConnectPro, we offer coaching, 
            mentorship, and access to raw materials, packaging solutions, 
            and more. From spark to success, we’re here to help your vision thrive.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link to="/getting-started">
              <button className="btn bg-[#F4A261] text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-[#e08c4a] transition duration-300">
                GET STARTED
              </button>
            </Link>
          </div>
          
        </div>
        
          <img
            src={logo}
            className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-sm rounded-lg "
            alt="ConnectPro Logo"
          />
        
      </div>
      <div className="w-full h-[1px] bg-[#F4A261] mt-2"></div>
    </div>
    </div>
    </>
  );
};

export default HeroSection;
