import React from "react";

const About = () => {
  return (
    <div className="mt-[80px] md:mt-[110px] px-4 md:px-8 lg:px-12">
      <h2 className="text-center text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] font-bold">
        BIZ HAQIMIZDA
      </h2>

      <div className="mt-8 flex flex-col items-center gap-6 md:mt-[30px] md:flex-row md:justify-between">
        <div
          data-aos="fade-right"
          className="w-full md:w-[48%] lg:w-[45%] bg-[#004435] text-white rounded-3xl p-6 sm:p-8 lg:p-12 md:h-[540px] flex flex-col"
        >
          <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold">
            Siyob Ferma haqida
          </h3>
          <p className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed">
            «SIYOB FERMA» Tovuq go’shti ishlab chiqaruvchi korxona Samarqand
            viloyatida joylashgan bo’lib bugungi kunda yuqori sifatli tovuq
            go’shti mahsulotlari ishlab chiqarish va sotishda yetakchi
            o’rinlarni egallab kelmoqda.
          </p>
          <button className="mt-auto self-start rounded-full bg-[#009440] px-6 py-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium text-white transition-colors duration-300 hover:bg-[#066a31]">
            Ko'proq ma'lumot olish
          </button>
        </div>

        <div data-aos="fade-left" className="w-full md:w-[48%] lg:w-[50%]">
          <img
            src="src/assets/About.jpg"
            alt="About"
            className="w-full rounded-3xl object-cover h-[250px] sm:h-[350px] md:h-[540px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
