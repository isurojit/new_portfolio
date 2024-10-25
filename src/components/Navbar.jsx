import React from "react";
import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  // Path to your CV PDF file
  const cvUrl = "/src/assets/CV_SUROJIT_MANNA.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "SUROJIT_MANNA_CV.pdf"; // The name it will save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SM</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="#"
          onClick={handleDownload}
          className={({ isActive }) =>
            isActive ? "text-black" : "text-blue-600"
          }
        >
          Download CV
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
