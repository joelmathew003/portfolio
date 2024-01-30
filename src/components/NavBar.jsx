import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / maxScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="fixed flex-col w-full z-40">
      <div
        className="flex justify-between text-white h-20 items-center px-4 bg-gray-950">
        <div className="font-signature text-5xl ml-2">JM</div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li className="px-4 cursor-pointer capitalize font-medium text-xl text-gray-500 hover:text-orange-100 duration-500">
              <Link to={link} smooth duration={500}>
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
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(!nav)}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="h-0.5 bg-orange-100" style={{ width: `${scrollProgress}%` }}></div>
    </div>
  );
};

export default NavBar;
