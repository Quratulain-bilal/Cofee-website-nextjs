import Image from "next/image";
import React from "react";
import CONTACT from "./../../../public/CONTACT.jpg"

const Contact = () => {
  return (
    <div id="contact" className="bg-[#f8f3e8] min-h-screen">
      {/* Feedback Text - Centered at the top with reduced spacing */}
      <div className="w-full py-7">
        <h1 className="text-4xl font-bold text-center font-serif text-gray-600">Feedback</h1>
      </div>

      <section className="text-gray-600 body-font relative bg-[#f8f3e8]">
        <div className="container px-5 pb-16 mx-auto flex sm:flex-nowrap flex-wrap gap-4">
          {/* Left side - Image */}
          <div className="lg:w-2/3 md:w-1/2 bg-cover bg-center rounded-lg shadow-lg overflow-hidden ">
            <Image
            width={500}
            height={500}
              src={CONTACT}
              alt="Contact"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right side - Contact form */}
          <div className="lg:w-1/3 md:w-1/2  bg-opacity-80 flex flex-col md:ml-auto w-full md:py-8 mt-1 md:mt-0 p-8 rounded-lg shadow-lg font-serif  hover:bg-amber-700">
            <h2 className="text-black text-lg mb-5 font-bold title-font">
              Contact Us
            </h2>
            <form action="https://formspree.io/f/mzzpoldg" method="POST">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-black font-bold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  className="w-full rounded border border-gray-600 focus:ring-2 focus:ring-white
                   text-base outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out bg-white"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-black font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  className="w-full  rounded border border-gray-600 focus:ring-2 focus:ring-white
                  text-base outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out bg-white"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="subject"
                  className="leading-7 text-sm text-black font-bold"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full  rounded border border-gray-600 focus:ring-2 focus:ring-white
                  text-base outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out bg-white"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-black font-bold"
                >
                  Message
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  className="w-full  rounded border border-gray-600 focus:ring-2 h-32 text-base outline-none text-black py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out bg-white"
                  required
                />
              </div>
              <button className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition-colors duration-200 ease-in-out">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
