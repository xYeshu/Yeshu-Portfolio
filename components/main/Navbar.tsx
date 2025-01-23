import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        {/* Logo Section */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/ywlogo.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-spin-slow transition-transform duration-300 z-50"
          />

          <span className="font ml-[10px] hidden md:block text-gray-50 hover:text-purple-300 transition-colors duration-300">
           
          </span>
        </a>

        {/* Navigation Links */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#skills"
              className="cursor-pointer hover:text-purple-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#Edu"
              className="cursor-pointer hover:text-purple-400 transition-colors duration-300"
            >
              Education
            </a>
            <a
              href="#Exp"
              className="cursor-pointer hover:text-purple-400 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#pro"
              className="cursor-pointer hover:text-purple-400 transition-colors duration-300"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-5">

          {Socials.map((social) => (
            <a href={social.href} target="_blank"
            rel="noopener noreferrer" > 
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="hover:scale-125 transition-transform duration-400 ease-in-out"
            />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
