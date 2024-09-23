
import Homepage from "./componenets/Homepage";
import Contact from "./componenets/Contact";

import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import  Menu from "./componenets/Menu";
import Products from "./componenets/Products";
import Gallery from "./componenets/Gallery";
import Footer from "./componenets/Footer";



export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Homepage />
      <About />
      <Menu />
      <Products />
      <Gallery />
      <Contact />
      <Footer />

      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>

      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>
    </div>
  );
}
