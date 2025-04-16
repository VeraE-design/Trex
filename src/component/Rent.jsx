import React from "react";

const Rent = () => {
  return (
    <div className="rent layout h-screen max-h-[359px] w-full rounded-[16px] relative border border-[#fff] mt-[60px]">
      <div className="max-w-[691px] w-full absolute top-[50%] left-[50%] ride p-2.5">
        <h1 className="text-[20px] md:text-[42px] font-[900]  md:h-[114px] text-[#ffffff] tracking-[1%] leading-[150%] text-center mb-[20px]">
          Rent a vehicle that gives you the confidence as you ride.
        </h1>
        <button className="bg-[#fdfdfd] mx-auto block  rounded-[44px] w-[169px] h-[42px] text-[16px] font-[700] text-[#000000]">
          Rent a car now
        </button>
      </div>
    </div>
  );
};

export default Rent;
