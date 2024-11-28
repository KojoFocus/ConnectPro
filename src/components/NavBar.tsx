import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-[#036082] shadow-lg py-1">
        <div className="flex-1">
          <a className="text-xl font-bold text-primary" href="/">
            <img src={logo} className="max-w-[150px] h-auto" alt="Logo" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-4 hidden lg:flex">
            <li>
              <a
                href="#home"
                className="text-lg font-medium hover:text-primary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-lg font-medium hover:text-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg font-medium hover:text-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-medium hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  href="#home"
                  className="text-lg font-medium hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-lg font-medium hover:text-primary"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg font-medium hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg font-medium hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
