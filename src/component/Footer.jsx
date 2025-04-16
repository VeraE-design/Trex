import React from "react";
import logo from "../assets/blacklogo.png";

const Footer = () => {
  const Links = [
    "Home",
    "Contact Us",
    "Gallery",
    "Service",
    "How it works",
    "privacy",
    "Term & service",
  ];

  return (
    <div className="layout my-8">
      <div className="flex flex-col md:flex-row items-center gap-5 md:justify-between md:h-[28.57px] mb-5 ">
        <a href="/">
          <img src={logo} alt="trex logo" className="w-[85.69px] m:h-full" />
        </a>
        <div className="flex flex-col md:flex-row items-center justify-start gap-5">
          {Links.map((link, index) => {
            return (
              <a
                href="#"
                key={index}
                className="md:h-[27px] font-[700] text-[16px] md:text-[20px] text-[#2f2f2f] underline underline-offset-6"
              >
                {link}
              </a>
            );
          })}
        </div>
      </div>
      <p className="font-[400] text-[12px] md:text-[15px] text-[#2f2f2f]">
        This website is owned and operated by Masref Ltd., incorporated in the
        United Kingdom The information provided is not legally binding and does
        not constitute an offering, endorsement, recommendation or solicitation
        to enter into any type of financial transaction in this or in any other
        jurisdiction in which such solicitation or offer would be unlawful under
        the laws of such jurisdiction.
      </p>
    </div>
  );
};

export default Footer;
