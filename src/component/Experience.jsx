import React from "react";

const Card = ({ heading, content }) => {
  return (
    <div className="max-w-[385px] w-full  rounded-[14px] border-[1px] border-[#f1f1f1] px-[18px] py-[21px] shadow-md">
      <h1 className="font-[500] text-[25px] md:text-[28px] leading-[100%] tracking-[1%] max-w-[126px] w-full  text-[#000000] ">
        {heading}
      </h1>
      <p className="font-[500] text-[15px] md:text-[18px] text-[#5c5c5c] leading-[27px] lowercase max-w-[349px] w-full ">
        {content}
      </p>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="layout my-8">
      <h1 className="font-[700] text-[20px] md:text-[38px] max-w-[396px] w-full text-[#1d1d1d] mb-1 md:mb-5">
        Experience luxury without compromises
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <Card
          heading={"Confort"}
          content={
            "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
          }
        />
        <Card
          heading={"Insurance"}
          content={
            "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
          }
        />
        <Card
          heading={"Commitment"}
          content={
            "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
          }
        />
      </div>
      <div className="mt-12 flex flex-col gap-3 md:flex-row justify-center md:justify-between">
        <h2 className="max-w-[355px] w-full  font-[400px] text-[20px] md:text-[24px] tracking-[1%] leading-[100%] text-[#000000]">
          Trusted by customers since
          <span style={{ fontWeight: "700" }}> 1990</span>
        </h2>

        <div className="flex gap-2 md:gap-4 items-start md:items-center flex-col md:flex-row">
          <div className="mainCard">
            <p className="incard">Trusted customers</p>
            <span className="rating">2000+</span>
          </div>
          <div className="mainCard">
            <p className="incard">Available Cars</p>
            <span className="rating">134+</span>
          </div>
          <div className="mainCard">
            <p className="incard">Total reservation</p>
            <span className="rating">134+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
