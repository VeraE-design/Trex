import React from "react";
import logo from "../assets/logo.png";
import { CiMenuKebab } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";

import { useState } from "react";

const links = [
  { title: "Home", to: "#" },
  { title: "Gallery", to: "#gallery" },
  { title: "Services", to: "#" },
  { title: "How It Works", to: "#" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-[#090909AB] relative">
      <div className="layout flex items-center justify-between h-[105px]">
        <div>
          <img src={logo} alt="trex logo" />
        </div>
        <div className="hidden lg:flex gap-[49px] text-[16px] font-bold text-[#fcfcfc]">
          {links.map((link, index) => {
            return (
              <a key={index} href="{link.to}">
                {link.title}
              </a>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <button className="bg-[#fdfdfd] w-[138px] h-[42px] rounded-[44px] text-[#1d1d1d] font-bold text-[16px]">
            Contact Us
          </button>
        </div>
        <div className="block lg:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoCloseCircleOutline size={30} />
            ) : (
              <CiMenuKebab size={30} />
            )}
          </button>
        </div>
        {/* mobile scrren menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black absolute top-[105px] w-1/2 left-0 p-2.5">
            <div className="flex flex-col gap-[49px] text-[16px] font-bold text-[#fcfcfc]">
              {links.map((link, index) => {
                return (
                  <a key={index} href="{link.to}">
                    {link.title}
                  </a>
                );
              })}
            </div>
            <button className="bg-[#fdfdfd] mt-[49px] w-[138px] h-[42px] rounded-[44px] text-[#1d1d1d] font-bold text-[16px]">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
