import Image from "next/image";
import Decaf from "../../../public/Decaf caffee.png"
import Black from "../../../public/Black Coffee.png"
import Cappuccino from "../../../public/Cappuccino coffee.png"
import Espresso from "../../../public/Espresso coffee.png"

export default function Product() {
  return (<div id="product">
    <section className="text-gray-600 body-font bg-[#f8f3e8] ">
      <div className="container px-5 py-24 mx-auto">
        {/* Centered Page Heading */}
        <h1 className="text-4xl font-semibold font-serif text-center mb-10 ">
          Our Products
        </h1>

        {/* Short Note on Quality Products */}
        <p className="text-center text-lg mb-10 font-serif">
          We take pride in offering high-quality coffee sourced from the finest
          beans, ensuring an exceptional experience in every cup.
        </p>

        <div className="flex flex-wrap -m-4">
          {[
            {
              src: Decaf,
              title: "Black Coffee",
            },
            {
              src: Black,
              title: "Black Coffee",
            },
            {
              src: Cappuccino,
              title: "Cappuccino Coffee",
            },
            {
              src: Espresso,
              title: "Espresso Coffee",
              
            },
          ].map((item, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* Product Image with Hover Effect */}
              <div className="block relative rounded overflow-hidden border-2 border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <Image
                width={500}
                height={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-72 md:h-80 lg:h-96 block" // Increased height for images
                  src={item.src}
                />
                {/* Title below image */}
                <h2 className="text-gray-900 title-font text-lg font-medium text-center mt-2">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
