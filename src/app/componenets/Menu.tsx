import Image from "next/image";
import m2 from "../../../public/m2.png"
import m1 from "../../../public/m1.png"
import m3 from "../../../public/m3.png"
import m4 from "../../../public/m4.png"
import m5 from "../../../public/m5.png"
import m6 from "../../../public/m6.png"
import m7 from "../../../public/m7.png"
import m8 from "../../../public/m8.png"


export default function menu() {
  return ( <div id="menu">
    <section
      className="text-gray-600 body-font
     bg-[#f8f3e8]"
    >
      <div className="container px-5 py-24 mx-auto">
        {/* Centered Menu Heading */}
        <h1 className="text-3xl font-bold text-center mb-10 font-serif">Menu</h1>

        <div className="flex flex-wrap -m-4">
          {[
            {
              src: m2,
              category: "CATEGORY",
              title: "Choclate Coffee",
              price: "$16.00",
            },
            {
              src: m1,
              category: "CATEGORY",
              title: "Cappuccino Coffee",
              price: "$21.15",
            },
            {
              src: m3,
              category: "CATEGORY",
              title: "Neptune",
              price: "$12.00",
            },
            {
              src: m4,
              category: "CATEGORY",
              title: "Decaf Coffee",
              price: "$18.40",
            },
            {
              src: m5,
              category: "CATEGORY",
              title: "Expresso Coffee",
              price: "$16.00",
            },
            {
              src: m6,
              category: "CATEGORY",
              title: "Black Coffee",
              price: "$12.00",
            },
            {
              src: m7,
              category: "CATEGORY",
              title: "Nuts Coffee",
              price: "$18.40",
            },
            {
              src: m8,
              category: "CATEGORY",
              title: "The 400 Blows",
              price: "$18.40",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="lg:w-1/4 md:w-1/2 p-4 w-full bg-[#f8f3e8]"
            >
              {/* Product Box */}
              <div className="block relative rounded overflow-hidden border-2 border-gray-300 transition-transform duration-300 hover:scale-105">
                <Image
                width={500}
                height={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-60 md:h-72 lg:h-80 block" // Increased height for responsiveness
                  src={item.src}
                />
                <div className="p-4">
                  {/* Product Details */}
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
