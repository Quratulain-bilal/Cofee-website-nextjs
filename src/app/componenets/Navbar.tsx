import Image from "next/image";
import Link from "next/link";
import { BsFillCupHotFill } from "react-icons/bs";
import logo from "../../../public/logo.png"

export default function Navbar() {
  return (
    <header className="bg-amber-700 text-black font-bold body-font shadow-lg ">
      <div className="container mx-auto p-5 flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Logo Section */}
        <a className="flex items-center justify-center mb-4 md:mb-0">
          <Image
          width={500}
          height={500}
            src={logo}
            alt="Logo"
            className="w-32 h-12 md:w-40 md:h-13 border rounded-md"
          />
        </a>

        {/* Navigation Links */}
        <nav className="flex gap-3 md:flex-row justify-center items-center text-base font-serif mb-4 md:mb-0">
          <Link
            href="#homepage"
            className="mb-2 md:mb-0 md:mr-5 hover:bg-white hover:rounded-md hover:scale-105 
            transition duration-300"
          >
            Home
          </Link>
          <Link
            href="#About"
            className="mb-2 md:mb-0 md:mr-5 transition duration-300 hover:bg-white hover:rounded-md hover:scale-105"
          >
            About
          </Link>
          <Link
            href="#menu"
            className="mb-2 md:mb-0 md:mr-5 hover:bg-white hover:rounded-md hover:scale-105 transition duration-300"
          >
            Menu
          </Link>
          <Link
            href="#Gallery"
            className="mb-2 md:mb-0 md:mr-5 hover:bg-white hover:rounded-md hover:scale-105 transition duration-300"
          >
            Gallery
          </Link>
          <Link
            href="#product"
            className="mb-2 md:mb-0 md:mr-5 hover:bg-white hover:rounded-md hover:scale-105 transition duration-300"
          >
            Products
          </Link>
        </nav>

        {/* Order Button */}
        <Link
          href="#menu"
          className="inline-flex items-center justify-center text-gray-700 font-bold bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg
          font-serif gap-1"
        >
          <BsFillCupHotFill />
          Order now
        </Link>
      </div>
    </header>
  );
}
