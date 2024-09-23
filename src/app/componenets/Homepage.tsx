import Link from "next/link";

export default function HomePage() {
  return (
    <div id="homepage">
      <section
        className="h-screen flex bg-cover bg-center bg-opacity-10"
        style={{ backgroundImage: "url('/bg.jpg')" }} // Background image
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center h-full px-5">
          {/* Right section for text content */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center py-20">
          
            <h1 className="title-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold text-white text-right">
             {` "Awaken Your Senses with Every Sip 
              Discover Your Daily Brew "`}
            </h1>

          
            <p className="mb-8 leading-relaxed text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-5 text-right font-serif">
              Experience the rich flavors of our premium coffee, sourced from
              the finest beans around the world. Each cup is crafted to awaken
              your senses and elevate your coffee ritual.
            </p>

          
            <div className="flex justify-center md:justify-end w-full">
              <Link
                href="#contact"
                className="ml-4 inline-flex text-gray-700 font-bold bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-sm sm:text-base md:text-lg
                font-serif"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
