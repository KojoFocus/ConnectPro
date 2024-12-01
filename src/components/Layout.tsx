import { Outlet } from "react-router-dom";
import Navbar from "./NavBar"; // Import your Navbar component

const Layout = () => {
  return (
    <div>
        <div className="hero bg-gradient-to-r from-[#036082] to-[#023347] w-full h-[2/3] flex flex-col items-center justify-between py-0">
      <Navbar /> {/* Render the Navbar at the top */}
      </div>
      <div className="mt-[100px]"> {/* To add space for the fixed navbar */}
        <Outlet /> {/* This will render the current page's content */}
      </div>
    </div>
  );
};

export default Layout;
