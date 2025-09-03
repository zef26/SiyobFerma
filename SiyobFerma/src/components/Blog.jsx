import React from "react";

const Blog = () => {
  return (
    <div className="mt-[100px] px-4 max-w-[1280px] mx-auto">
      <h3 className="text-[32px] sm:text-[40px] lg:text-[55px] text-center font-bold">
        BLOG
      </h3>
      <p className="text-[#8C8C8C] text-[16px] sm:text-[18px] text-center mt-2">
        Qimmatli maslahatlar va maxsus retseptlar
      </p>

      {/* Карточки */}
      <div
        data-aos="fade-left"
        className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        <div className="bg-[#ECECEC] rounded-[40px] p-[20px] hover:shadow-lg transition duration-300 cursor-pointer">
          <img
            src="src/assets/blogs/blog1.jpg"
            alt="retsept"
            className="rounded-[30px] w-full h-[220px] object-cover hover:scale-105 transition duration-300"
          />
          <p className="text-[#28A0F7] text-[14px] pt-[25px]">Retseptlar</p>
          <p className="text-[18px] sm:text-[20px] font-[700] pt-[20px]">
            Tovuq oyoqchalaridan mazali Chaxoxbili retsepti
          </p>
        </div>

        <div className="bg-[#ECECEC] rounded-[40px] p-[20px] hover:shadow-lg transition duration-300 cursor-pointer">
          <img
            src="src/assets/blogs/blog2.jpg"
            alt="retsept"
            className="rounded-[30px] w-full h-[220px] object-cover hover:scale-105 transition duration-300"
          />
          <p className="text-[#28A0F7] text-[14px] pt-[25px]">Retseptlar</p>
          <p className="text-[18px] sm:text-[20px] font-[700] pt-[20px]">
            Tovuq jigari va qaymoqdan mazali retsept
          </p>
        </div>

        <div className="bg-[#ECECEC] rounded-[40px] p-[20px] hover:shadow-lg transition duration-300 cursor-pointer">
          <img
            src="src/assets/blogs/blog3.jpg"
            alt="retsept"
            className="rounded-[30px] w-full h-[220px] object-cover hover:scale-105 transition duration-300"
          />
          <p className="text-[#28A0F7] text-[14px] pt-[25px]">Retseptlar</p>
          <p className="text-[18px] sm:text-[20px] font-[700] pt-[20px]">
            Qovurilgan tovuq yurakchalaridan ishtaha ochar retsept
          </p>
        </div>

        <div className="bg-[#ECECEC] rounded-[40px] p-[20px] hover:shadow-lg transition duration-300 cursor-pointer">
          <img
            src="src/assets/blogs/blog4.jpg"
            alt="retsept"
            className="rounded-[30px] w-full h-[220px] object-cover hover:scale-105 transition duration-300"
          />
          <p className="text-[#28A0F7] text-[14px] pt-[25px]">Retseptlar</p>
          <p className="text-[18px] sm:text-[20px] font-[700] pt-[20px]">
            Tovuq oyoqchalaridan sirli qarsildoq jo'ja retsepti
          </p>
        </div>
      </div>

      {/* Кнопка */}
      <div className="w-full flex justify-center mt-[50px]">
        <button className="bg-[#009440] py-[10px] px-[24px] rounded-[36px] text-white font-medium text-[15px] sm:text-[17px] hover:bg-[#066a31] transition duration-300 cursor-pointer">
          Barchasini ko'rish
        </button>
      </div>
    </div>
  );
};

export default Blog;
