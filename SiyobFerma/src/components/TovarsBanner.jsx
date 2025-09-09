import React from "react";

const TovarsBanner = () => {
  return (
    <div
      data-aos="zoom-in"
      className="relative w-full mt-[25px] overflow-hidden rounded-3xl"
    >
      <img
        src="src/assets/banner-tovar.jpg"
        alt="siyob"
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-3xl"
      />

      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-20">
        <h1 className="text-white font-bold leading-snug text-[22px] sm:text-[32px] md:text-[44px] lg:text-[56px] xl:text-[64px] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
          Mahsulotlarimiz
        </h1>
        <p className="text-white mt-2 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px]">
          Milliy brend
        </p>
      </div>
    </div>
  );
};

export default TovarsBanner;
