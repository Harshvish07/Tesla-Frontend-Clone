import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

function Crouser({ slides, autoSlides = false, autoslideIntervel = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];
  const prev = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex == 0 ? slides.length - 1 : currentIndex - 1
    );
  console.log(slides.length);
  const next = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex == slides.length - 1 ? 0 : currentIndex + 1
    );

  useEffect(() => {
    if (!autoSlides) return;
    const slideInterver = setInterval(next, autoslideIntervel);
    return () => clearInterval(slideInterver);
  }, []);

  return (
    <div className="relative h-[670px] md:h-[550px] md:mt-10 overflow-hidden mb-10 flex justify-center">
      {slides.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Desktop Image */}
          <img
            src={item.desktopImage}
            alt={item.title}
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile Image */}
          <img
            src={item.mobileImage}
            alt={item.title}
            className="block md:hidden w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Text content overlay */}
      <div className="absolute inset-0 mt-15 md:mt-12  flex justify-center z-50">
        <div className="flex flex-col items-center z-20">
          <h1 className="text-white text-5xl md:text-6xl font-semibold mb-2">
            {currentSlide.title}
          </h1>
          <a href="#" className="text-white underline text-2xl mb-2">
            {currentSlide.offer}
          </a>
          <div className="flex md:p-2 md:gap-10 gap-4  relative z-[999]">
            <button className="bg-[#3E6AE1]  text-white h-10 w-40 md:w-48 shadow rounded-b-sm cursor-pointer hover:bg-[#3457B1]">
              Order now
            </button>
            <button className="bg-white h-10 w-40 md:w-48 shadow rounded-b-sm cursor-pointer">
              Learn More
            </button>
          </div>
          {/* Arrows */}
          <div className="absolute inset-0 flex justify-between items-center p-4 z-50">
            <button
              onClick={prev}
              className="p-1 ml-4 rounded shadow bg-white/80 hover:bg-white cursor-pointer"
            >
              <FaChevronLeft size={30} />
            </button>
            <button
              onClick={next}
              className="p-1 mr-4 rounded shadow bg-white/80 hover:bg-white cursor-pointer"
            >
              <FaAngleRight size={30} />
            </button>
          </div>
          <div className="absolute bottom-4 right-0 left-0 z-50">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    currentIndex === i
                      ? "bg-white scale-110"
                      : "bg-gray-400 bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crouser;
