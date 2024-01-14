import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  const links = [
    {
      id: 1,
      name: "Linkedin",
      child: (
        <>
          <div className="px-4">LinkedIn</div>
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/joel-mathew-3122751a6/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "Github",
      child: (
        <>
          <div className="px-4">Github</div>
          <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/joelmathew003",
    },
    {
      id: 3,
      name: "Email",
      child: (
        <>
          <div className="px-4">Email</div>
          <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:joelsammathew@gmail.com",
      style: "rounded-br-md",
    },
    {
      id: 4,
      child: (
        <>
          <div className="px-4">Resume</div>
          <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex fixed bg-gray-500 text-white left-0 top-[35%] rounded-lg">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
