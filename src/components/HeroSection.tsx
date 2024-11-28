import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero bg-gradient-to-r from-[#036082] to-[#023347] w-full h-screen flex flex-col items-center justify-between py-8">
        {/* Navbar Section */}
        <div className="flex w-full h-[100px] justify-between items-center px-6 md:px-10">
          <img src={logo} className="max-w-[80px] md:max-w-[100px] h-auto" alt="Logo" />
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            <li>
              <a
                href="#home"
                className="text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#F4A261] text-sm md:text-lg font-medium hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#F4A261] text-2xl">
            ☰
          </button>
        </div>

        {/* Hero Content */}
        <div className="hero-content flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-6 md:px-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl text-[#F4A261] font-bold">
              Empowering Entrepreneurs
            </h1>
            <p className="py-4 md:py-6 text-sm md:text-base text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi 
              <br />
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="btn bg-[#F4A261] text-[#036082] px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-[#e08c4a] transition duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="flex-1 mb-6 lg:mb-0">
            <img src={logo} className="max-w-[150px] md:max-w-sm rounded-lg shadow-2xl" alt="Hero Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
