"use client";
import { useState } from "react";
import Image from "next/image";
import about from "./../../../public/about.png"

export default function About() {
  const [showNote, setShowNote] = useState(false);

  // Function to toggle show/hide note
  const toggleNote = () => {
    setShowNote(!showNote);
  };

  return (
    <div id="About">
      
      <section className="min-h-screen flex flex-col items-center justify-center p-10 bg-[#f8f3e8] text-center">
        {/* About Us Heading */}
        <h1 className=" text-gray-600 mb-4 lg:text-4xl font-serif font-semibold text-lg">
          About Us
        </h1>

        {/* Centered Image */}
        <Image
        width={500}
        height={500}
          src={about} // Adjust the path as per your setup
          alt="Coffee"
          className="max-w-[600px] w-full h-auto mb-10 rounded-lg"
        />

        {/* Content Area */}
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl font-serif font-semibold text-gray-600 mb-5">
            What makes my coffee special?
          </h2>

          <p className="text-base text-[#333] mb-5 leading-6 text-left font-serif">
            Our coffee is sourced from the finest farms, handpicked, and roasted
            to perfection to bring out unique flavors that make every cup
            special.we deliever best and quality productc with best staff and
            management
          </p>

          {/* Additional Content (shown conditionally) */}
          {showNote && (
            <div className="mb-5 text-base text-[#333] font-serif">
              <p>
                We ensure the highest quality by working directly with farmers,
                maintaining ethical sourcing, and using eco-friendly processes.
                This allows us to provide a premium coffee experience while
                supporting sustainable practices.
              </p>
            </div>
          )}

          {/* Learn More Button */}
          <button
            className="bg-[#8b4513] text-white py-2 px-4 border-none cursor-pointer transition-colors duration-300 text-base rounded-md max-w-[200px] w-full mx-auto block"
            onMouseEnter={(e) =>
              (e.currentTarget.className =
                "bg-[#5f3310] text-white py-2 px-4 border-none cursor-pointer transition-colors duration-300 text-base rounded-md max-w-[200px] w-full mx-auto block")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.className =
                "bg-[#8b4513] text-white py-2 px-4 border-none cursor-pointer transition-colors duration-300 text-base rounded-md max-w-[200px] w-full mx-auto block")
            }
            onClick={toggleNote}
          >
            {showNote ? "Hide Details" : "Learn More"}
          </button>
        </div>

        {/* Responsive Tailwind Classes */}
        <style jsx>{`
          @media (max-width: 768px) {
            h1 {
              font-size: 2.5rem;
            }

            h2 {
              font-size: 1.8rem;
            }

            p {
              font-size: 1rem;
              text-align: center;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 2rem;
            }

            h2 {
              font-size: 1.5rem;
            }

            p {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
