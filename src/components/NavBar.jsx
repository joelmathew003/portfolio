import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    // { id: 3, link: "Skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="flex justify-between text-white fixed w-full h-20 items-center px-4 bg-gray-950 z-40">
      <div className="font-signature text-5xl ml-2">JM</div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li className="px-4 cursor-pointer capitalize font-medium text-xl text-gray-500 hover:text-gray-400 duration-500">
            <Link to={link} smooth duration={500} >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 md:hidden z-10 px-4">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="bg-black w-full top-0 left-0 h-screen flex flex-col justify-between py-20 items-center absolute opacity-95">
          {links.map(({ id, link }) => (
            <li className="text-4xl py-12 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-gray-300 duration-500 z-500 transition-all">
              <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
