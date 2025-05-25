// function CatCard({ categorie }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentCategorie = categorie[currentIndex];
//   return (
//     <div className="flex overflow-x-auto whitespace-nowrap px-10 scroll-smooth ">
//       <div className="inline-flex gap-6 ">
//         {categorie.map((item, index) => (
//           <div key={index} className="flex-shrink-0 w-[70vw] relative">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-[500px] object-cover rounded-xl"
//             />
//             <div className="mt-4 ml-5 absolute inset-0">
//               <h1 className="text-2xl text-white font-bold top-10">
//                 {item.header}
//               </h1>
//             </div>
//             <div className="absolute bottom-20 ">
//               <h1 className="text-2xl ml-5 text-white font-bold bottom-10">
//                 {item.model}
//               </h1>
//               <p className="text-2xl ml-5  text-white">{item.offer}</p>
//               <div className=" absolute flex ml-5 mt-5 gap-10">
//                 <button className="bg-blue-600 text-white h-10 w-48 shadow rounded-b-sm cursor-pointer">
//                   ordernow
//                 </button>
//                 <button className="bg-white h-10 w-48 shadow rounded-b-sm  cursor-pointer">
//                   buynow
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex absolute bottom-0 justify-center ">
//         <div className="flex items-center justify-center gap-2">
//           {categorie.map((_, i) => (
//             <div
//               key={i}
//               onClick={() => setCurrentIndex(i)}
//               className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
//                 currentIndex === i
//                   ? "bg-white scale-125"
//                   : "bg-gray-400 bg-opacity-50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CatCard;

import { useEffect, useRef, useState } from "react";

function CatCard({ categorie }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;

      let closestIndex = 0;
      let minDistance = Infinity;

      imageRefs.current.forEach((el, index) => {
        if (!el) return;
        const distance = Math.abs(el.offsetLeft - scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleimage = (index) => {
    setCurrentIndex(index);
    imageRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  };

  return (
    <div className="relative ">
      {/* Slider with scrollbar hidden */}
      <div
        className="flex overflow-x-auto whitespace-nowrap snap-x scroll-smooth no-scrollbar px-2 "
        ref={scrollContainerRef}
      >
        <div className="inline-flex gap-4 md:gap-6 md:px-6">
          {categorie.map((item, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              onClick={() => handleimage(index)}
              className={`flex-shrink-0 w-[80vw] md:w-[70vw] relative mx-2 justify-center ${
                currentIndex === index ? "cursor-default" : "cursor-pointer"
              }`}
            >
              {/* desktop view */}
              <img
                src={item.desktopImage}
                alt={item.title}
                className="hidden  md:block w-full md:w-[75vw] h-[570px] object-cover rounded-2xl"
              />
              {/* mobile view */}

              <img
                src={item.mobileImage}
                alt={item.title}
                className="block md:hidden w-full h-[530px] object-cover rounded-xl"
              />

              <div className="absolute inset-0 flex flex-col justify-between pl-4 ">
                <h1 className="md:text-2xl  top-0 text-white font-bold mt-5 ">
                  {item.header}
                </h1>
                <div className="md:mb-10 mb-8">
                  <h1 className="md:text-2xl text-white font-bold">
                    {item.model}
                  </h1>
                  <h3 className=" text-white font-bold">{item.description}</h3>
                  <p className="md:text-2xl text-white">{item.offer}</p>
                  <div className="flex gap-4 md:gap-10 mt-5">
                    <button className="bg-[#3E6AE1] text-white h-10 w-35 md:w-48 shadow rounded-b-sm cursor-pointer hover:bg-[#3457B1]">
                      Order now
                    </button>
                    <button className="bg-white h-10 md:w-48 w-35 shadow rounded-b-sm cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation outside the slider */}
      <div className="w-full flex justify-center mt-6 mb-4">
        <div className="flex items-center gap-2">
          {categorie.map((_, i) => (
            <div
              key={i}
              onClick={() => handleimage(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === i
                  ? "bg-black scale-110"
                  : "bg-gray-400 bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatCard;
