// import React from "react";
// import { MdMessage } from "react-icons/md";
// import { FaArrowUp } from "react-icons/fa";
// import { PiSteeringWheelFill } from "react-icons/pi";

// function Footer() {
//   return (
//     <div className=" fixed z-60 bottom-0 w-[300px] md:w-full bg-white h-14 flex justify-center gap-10 py-2">
//       <div className="   flex gap-2 bg justify-center items-center border bg-gray-100 p-2 ">
//         <button className="flex gap-2 justify-center items-center cursor-pointer">
//           <MdMessage size={24} /> Ask a questions
//         </button>
//         <input
//           type="text"
//           placeholder="Ask a question"
//           className="md:w-80 h-8 outline-none"
//         ></input>
//         <button className=" text-white bg-blue-600 cursor-pointer">
//           <FaArrowUp size={24} />
//         </button>
//       </div>
//       <button className="flex gap-2 w-[25px]   items-center border  bg-gray-100 md:w-60 h-10 p-2 cursor-pointer">
//         <PiSteeringWheelFill size={24} color="blue " />
//         Start Your Driving Today
//       </button>
//     </div>
//   );
// }

// export default Footer;

import { MdMessage } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-60 bg-white border-t py-2 px-4">
      <div className="flex   items-center justify-center gap-4">
        {/* Chat Section */}
        <div className="flex w-20 md:w-[30%] justify-center  items-center gap-2 bg-gray-100 p-2 rounded">
          <MdMessage size={24} />
          <input
            type="text"
            placeholder="Ask a question"
            className="flex-1 h-8 px-2 outline-none text-sm bg-white rounded hidden md:block"
          />
          <button className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700 hidden   md:block">
            <FaArrowUp size={18} />
          </button>
        </div>

        {/* Driving Button */}
        <button className="flex items-center  justify-center gap-2 bg-gray-100 p-2 rounded w-full md:w-auto ">
          <PiSteeringWheelFill size={24} className="text-blue-600" />
          <span className="text-sm font-medium">Start Your Driving Today</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
