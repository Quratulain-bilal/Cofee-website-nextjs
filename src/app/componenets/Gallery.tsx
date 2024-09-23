import Image from "next/image";
import image1 from "./../../../public/image1.png"
import image2 from "./../../../public/image2.png"
import image4 from "./../../../public/image4.png"
import image5 from "./../../../public/image6.png"
import b1 from "./../../../public/b1.png"
import c2 from "./../../../public/c2.png"
export default function Gallery() {
  return (<div id="Gallery">
    <section className="text-gray-600 body-font 
      bg-[#f8f3e8]">
      <div className="container px-5 py-24 mx-auto text-center">
        <div className="flex w-full mb-10 flex-wrap justify-center ">
          <h1
            className="
          font-sesm:text-3xl text-4xl font-bold title-font font-serif   text-gray-600 lg:w-1/3 lg:mb-0 mb-4  border-b-2  pb-2"
          >
            Our Gallery
          </h1>
        </div>

        <div className="flex flex-wrap -m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="p-2 w-1/2">
              <Image
              width={500}
              height={500}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-gray-300 shadow-lg"
                src={image1}
              />
            </div>
            <div className="p-2 w-1/2">
              <Image
              width={500}
              height={500}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-gray-300 shadow-lg"
                src={image2}
              />
            </div>
            <div className="p-2 w-full">
              <Image
              width={500}
              height={500}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-gray-300 shadow-lg"
                src={image4}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="p-2 w-full">
              <Image
              width={500}
              height={500}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-gray-300 shadow-lg"
                src={image5}
              />
            </div>
            <div className="p-2 w-1/2">
              <Image
              width={500}
              height={500}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-gray-300 shadow-lg"
                src={b1}
              />
            </div>
            <div className="p-2 w-1/2">
              <Image
              width={500}
              height={500}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-gray-300 shadow-lg"
                src={c2}
              />
            </div>/
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
}
