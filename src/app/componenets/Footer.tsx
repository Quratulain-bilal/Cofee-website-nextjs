import React from "react";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-black body-font bg-gray-50">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-bold items-center md:justify-start justify-center text-black">
            <span className="ml-3 text-xl">Quratulain</span>
          </a>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2  sm:py-2 sm:mt-0 mt-4">
            © 2024 Quratulain
            <a
              href="https://x.com/stelalvna"
              className="text-black ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @shah
            </a>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4 text-black items-center">
            <p className="hidden md:block text-black font-bold opacity-80">
              Connect with me:
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61565211897828"
              className="transition-all duration-300 hover:scale-110"
            >
              <FaFacebookSquare className="w-[28px] h-[28px] text-black hover:text-[#1877F2] hover:-translate-y-1" />
            </a>
            <a
              href="https://github.com/Quratulain-bilal"
              className="transition-all duration-300 hover:scale-110"
            >
              <FaSquareGithub className="w-[28px] h-[28px] text-black hover:text-[#6e5494] hover:-translate-y-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/quratulain-shah-7bb869316"
              className="transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-[28px] h-[28px] text-black hover:text-[#0072b1] hover:-translate-y-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/quratulain-shah-7bb869316"
              className="transition-all duration-300 hover:scale-110"
            >
              <FaInstagramSquare className="w-[28px] h-[28px] text-black hover:text-[#0072b1] hover:-translate-y-1" />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/quratulain-shah-7bb869316"
              className="transition-all duration-300 hover:scale-110"
            >
              < FaSquareXTwitter className="w-[28px] h-[28px] text-black hover:text-[#0072b1] hover:-translate-y-1" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
