import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Experience" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="flex justify-between bg-black text-white fixed w-full h-20 items-center px-4">
      <div className="font-signature text-5xl ml-2">JM</div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 md:hidden z-10 px-4">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="bg-black w-full top-0 left-0 h-screen flex flex-col justify-between py-20 items-center absolute bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({ id, link }) => (
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 z-10">
            {link}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default NavBar;
