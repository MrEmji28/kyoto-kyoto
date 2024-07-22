import React, { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-base-100 w-full fixed top-0 left-0 flex items-center justify-between p-4">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1 text-center sm:text-left sm:flex sm:items-center">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <img src="/images/logo.png" alt="Logo" className="h-14 w-18 inline-block" />
        </a>
      </div>
      <div className="flex-none hidden sm:flex items-center space-x-2 sm:space-x-4">
        <button
          className="btn text-white"
          style={{ backgroundColor: "#D84044" }}
        >
          ORDER NOW
        </button>
        <button className="btn btn-ghost">
          Sign In
        </button>
        <button className="btn btn-ghost">
          Register
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 flex flex-col items-center space-y-2 p-4 sm:hidden">
          <button
            className="btn text-white w-full"
            style={{ backgroundColor: "#D84044" }}
          >
            ORDER NOW
          </button>
          <button className="btn btn-ghost w-full">
            Sign In
          </button>
          <button className="btn btn-ghost w-full">
            Register
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
