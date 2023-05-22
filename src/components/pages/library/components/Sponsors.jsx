import React from "react";
import img1 from "../../../../assets/images/comming_soon.png";

const Sponsors = () => {
  return (
    <div>
      <h1 className="mt-5 flex justify-center items-center font-extrabold">Connected With</h1>
      <hr className="mx-10 my-4"></hr>
      <div className="mt-[30px] flex gap-3 sm:gap-6 lg:gap-10 flex-wrap justify-center items-center">
        <div className="shadow-lg rounded-[10px] mb-2 cursor-pointer border-3 border-solid transition-all transition-250 ease-in-out">
          <img
            src={img1}
            className="w-[70px] h-[50px] sm:w-[100px] sm:h-[70px] lg:w-[250px] lg:h-[150px] object-cover hover:scale-[1.25] ease-in-out transition-all transition-200 border-[rgba(112,96,96,0.8)]"
          />
        </div>
        <div className="shadow-lg rounded-[10px] mb-2 cursor-pointer border-3 border-solid transition-all transition-250 ease-in-out">
          <img
            src={img1}
            className="w-[70px] h-[50px] sm:w-[100px] sm:h-[70px] lg:w-[250px] lg:h-[150px] object-cover hover:scale-[1.25] ease-in-out transition-all transition-200 border-[rgba(112,96,96,0.8)]"
          />
        </div>
        <div className="shadow-lg rounded-[10px] mb-2 cursor-pointer border-3 border-solid transition-all transition-250 ease-in-out">
          <img
            src={img1}
            className="w-[70px] h-[50px] sm:w-[100px] sm:h-[70px] lg:w-[250px] lg:h-[150px] object-cover hover:scale-[1.25] ease-in-out transition-all transition-200 border-[rgba(112,96,96,0.8)]"
          />
        </div>
        <div className="shadow-lg rounded-[10px] mb-2 cursor-pointer border-3 border-solid transition-all transition-250 ease-in-out">
          <img
            src={img1}
            className="w-[70px] h-[50px] sm:w-[100px] sm:h-[70px] lg:w-[250px] lg:h-[150px] object-cover hover:scale-[1.25] ease-in-out transition-all transition-200 border-[rgba(112,96,96,0.8)]"
          />
        </div>
        <div className="shadow-lg rounded-[10px] mb-2 cursor-pointer border-3 border-solid transition-all transition-250 ease-in-out">
          <img
            src={img1}
            className="w-[70px] h-[50px] sm:w-[100px] sm:h-[70px] lg:w-[250px] lg:h-[150px] object-cover hover:scale-[1.25] ease-in-out transition-all transition-200 border-[rgba(112,96,96,0.8)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
