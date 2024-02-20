import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/sreyas-t-sasi-b5857b217',
      style: 'rounded-tr-md'
    },

    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/SreyasTsasi',
      style: 'rounded-tr-md'
    },

    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:sreyuzzzksd@gmail.com',
      style: 'rounded-br-md',
    },

    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/sreyasresume.pdf",
      style: 'rounded-br-md',
      download: true,
    }
  ];

  return (
    <div className=" hidden lg:flex flex flex-col fixed top-[35%] left-0">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={`w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
            <a href={href} className="flex justify-between items-center w-full text-white" download={download} target='_blank'
            rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
