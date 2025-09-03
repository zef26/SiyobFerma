import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Siyob Ferma tovuqlari halolmi?",
    answer:
      "Albatta! Siyob Ferma xalqaro halol sertifikatiga ega va halollik talablariga qat'iy rioya qiladi!"
  },
  {
    question: "Siyob Ferma tovuqlarining boshqalardan farqi nimada?",
    answer:
      "Biz broyler jo'jalarini hali kichikligidayoq sotuvga chiqaramiz. Aynan shuning uchun Siyob Ferma tovuqlari yumshoqqina va mazali bo'ladi!"
  },
  {
    question: "Siyob Ferma qayerda joylashgan?",
    answer:
      "Bizning fermamiz Samarqand viloyatining, Toyloq tumanida joylashgan. Deyarli barcha viloyatlarda dilerlarimiz mavjud!"
  },
  {
    question: "Sizlar bilan ishlashim uchun nima qilishim kerak?",
    answer:
      "Biz bilan bog'laning. Ko'rsatilgan raqamlarga qo'ng'iroq qiling, yoki biz bilan aloqa bo'limida o'z raqamingizni bizga yuboring!"
  }
];

const Answers = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-center lg:items-start justify-between mt-[100px] px-4">
      {/* Левая картинка */}
      <div
        data-aos="fade-right"
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] flex-shrink-0"
      >
        <img
          src="src/assets/msg.png"
          alt="Savollar illustration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Правая часть */}
      <div
        data-aos="fade-left"
        className="flex-1 w-full max-w-[650px] lg:self-center"
      >
        <h3 className="text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[55px] font-bold leading-tight mb-10 text-center lg:text-left">
          KO'P BERILADIGAN SAVOLLAR
        </h3>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="rounded-2xl">
              {/* Вопрос */}
              <button
                className="w-full text-left p-4 font-semibold text-[15px] sm:text-[16px] lg:text-[17px] flex justify-between items-center border border-[#EAEAEA] rounded-xl"
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {/* Ответ */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-2"
                    : "grid-rows-[0fr] opacity-0"
                } overflow-hidden`}
              >
                <div className="overflow-hidden">
                  <div className="p-4 bg-white border border-[#EAEAEA] rounded-xl text-[#777] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answers;
