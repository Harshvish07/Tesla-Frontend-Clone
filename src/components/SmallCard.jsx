// import React from "react";

// function SmallCard({ options }) {
//   return (
//     <div className="bg-white flex p-2   md:grid-cols-1 grid-cols-1 ">
//       <div className=" flex w-full  items-center justify-center gap-10">
//         {options.map((item, index) => (
//           <div className="flex flex-col h-30 items-center justify-center bg-gray-300">
//             <h1>{item.header}</h1>
//             <p>{item.description}</p>
//             <button className="bg-white w-20 h-10">{item.button}</button>

//             <img src={item.image} className="h-20" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SmallCard;

// import React from "react";

// function SmallCard({ options }) {
//   return (
//     <div className="bg-white py-2">
//       <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center">
//         {/* [#F4F4F4] */}
//         {options.map((item, index) => (
//           <div
//             key={index}
//             className="flex  w-full h-[200px] bg-[#F4F4F4] rounded-md  justify-between md:h-[200px] md:max-w-[700px]"
//           >
//             {/* Text Content in Column */}
//             <div className="flex justify-center flex-col ml-4 md:ml-8 md:gap-2 md:mb-4">
//               <h1 className="font-bold md:text-2xl">{item.header}</h1>
//               <p className="mb-4">{item.description}</p>
//               <button className="md:w-52 w-30 h-10 rounded cursor-pointer bg-white hover:bg-[#F4F4F4] ">
//                 {item.button}
//               </button>
//             </div>

//             {/* Image on the Right */}
//             <img
//               src={item.image}
//               alt="card-img"
//               className=" h-[100px] md:w-[200px] object-cover "
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SmallCard;

import React from "react";

function SmallCard({ options }) {
  return (
    <div className="bg-white py-2">
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center">
        {options.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between md:flex-row w-full bg-[#F4F4F4] rounded-md md:max-w-[700px] overflow-hidden"
          >
            {/* Image on Top (mobile) or Right (desktop) */}
            <img
              src={item.image}
              alt="card-img"
              className="w-full pl-2 md:w-[200px] h-[200px] object-cover md:order-2"
            />

            {/* Text Content */}
            <div className="flex flex-col justify-center p-4 md:ml-4">
              <h1 className="font-bold text-xl md:text-2xl">{item.header}</h1>
              <p className="my-2">{item.description}</p>
              <button className="w-32 md:w-52 h-10 rounded cursor-pointer bg-white hover:bg-[#e0e0e0] transition">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallCard;
