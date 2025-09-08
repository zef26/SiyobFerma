import React from "react";
import { ListFilter, Scale, Square } from "lucide-react";

const products = [
  {
    id: 1,
    img: "/src/assets/tovars/tovar1.jpg",
    title: "Broyler jo'ja qanotchalari",
    info: "Korobkada 8 dona",
    weight: "1kg (o'rtacha)",
  },
  {
    id: 2,
    img: "/src/assets/tovars/tovar2.jpg",
    title: "Broyler jo'ja soni",
    info: "Korobkada 8 dona",
    weight: "1kg (o'rtacha)",
  },
  {
    id: 3,
    img: "/src/assets/tovars/tovar3.jpg",
    title: "Broyler jo'ja filesi",
    info: "Korobkada 8 dona",
    weight: "1kg (o'rtacha)",
  },
  {
    id: 4,
    img: "/src/assets/tovars/tovar4.jpg",
    title: "Broyler jo'ja oyoqchalari",
    info: "Korobkada 8 dona",
    weight: "1kg (o'rtacha)",
  },
  {
    id: 5,
    img: "/src/assets/tovars/tovar5.jpg",
    title: "Broyler jo'ja boldiri",
    info: "Korobkada 8 dona",
    weight: "1kg (o'rtacha)",
  },
  {
    id: 6,
    img: "/src/assets/tovars/tovar6.jpg",
    title: "Broyler jo'ja jigari",
    info: "Delikates",
    weight: "Kilolik yoki qadoqda",
  },
  {
    id: 7,
    img: "/src/assets/tovars/tovar7.jpg",
    title: "Broyler jo'ja yuragi",
    info: "Delikates",
    weight: "Kilolik yoki qadoqda",
  },
  {
    id: 8,
    img: "/src/assets/tovars/tovar8.jpg",
    title: "Broyler jo'ja oshqozoni",
    info: "Delikates",
    weight: "Kilolik yoki qadoqda",
  },
  {
    id: 9,
    img: "/src/assets/tovars/tovar9.jpg",
    title: "Marinadlangan tovuq soni",
    info: "Marinadlangan",
    weight: "Kabob uchun tayyor",
  },
  {
    id: 10,
    img: "/src/assets/tovars/tovar10.jpg",
    title: "Siyob Mazali MIX",
    info: "Marinadlangan",
    weight: "Kabob uchun tayyor",
    extra: "Tovuqning turli xil qismlari",
  },
];

const AboutTovars = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Левая часть — картинка + характеристики */}
        <div data-aos="fade-right" className="flex flex-col items-center lg:w-2/5">
          <img
            src="/src/assets/tovars/tushka.png"
            alt="Siyob Ferma broyler jo'ja"
            className="object-contain w-full max-w-md"
          />
          <h3 className="mt-6 text-2xl font-bold text-center">
            Broyler jo'ja go'shti (butun)
          </h3>

          {/* Характеристики */}
          <div className="flex flex-col items-center w-full max-w-md gap-3 mt-5 sm:flex-row sm:justify-between">
            <p className="flex items-center gap-2 text-lg">
              <ListFilter size={28} color="green" /> 1 - 7 kategoriya
            </p>
            <p className="flex items-center gap-2 text-lg">
              <Scale size={28} color="green" /> 0.87 - 1.71kg (o'rtacha)
            </p>
          </div>
        </div>

        {/* Правая часть — описание */}
        <div data-aos="fade-left" className="lg:w-3/5">
          <h3 className="text-[22px] font-bold leading-snug md:text-4xl">
            Siyob Ferma broyler jo'ja mahsulotlari
          </h3>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-800 md:text-xl">
            <p>
              Siyob Ferma tovuqlari tuxumlik paytidan tovuqning eng yaxshi
              navlaridan biri bo’lgan «Venger ROSS 308» yetishtiriladi.
            </p>
            <p>
              Tovuqlarni saqlash va oziqlantirish uchun qulay va xavfsiz
              sharoitlar yaratilgan: tovuq ratsionidagi yem-xashaklar vitamin va
              minerallarning tabiiy manbalari bilan maxsus retsept bo’yicha
              tayyorlangan. Mutaxassislar tomonidan muntazam ravishda nazorat
              qilinadi.
            </p>
            <p>
              Siyob Ferma broyler jo’jalari yoshroq paytida so’yilgani sababli,
              jo’ja go’shti yumshoq va mazali bo’ladi!
            </p>
          </div>

          {/* Кнопка */}
          <button className="mt-8 rounded-full bg-[#009440] px-6 py-3 text-base md:text-lg lg:text-xl font-medium text-white transition-colors duration-300 hover:bg-[#066a31]">
            Savdo bo'limi bilan bog'lanish
          </button>
        </div>
      </div>

      {/* Карточки */}
      <div  className="flex flex-wrap justify-center gap-6 pt-10 mt-20">
        {products.map((item) => (
          <div data-aos="fade-up"
            key={item.id}
            className="
              shadow rounded-4xl bg-[#009440] flex flex-col pb-10
              w-full sm:w-[48%] lg:w-[23%] min-w-[250px]
            "
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                className="object-cover duration-300 hover:scale-110"
                src={item.img}
                alt="tovar"
              />
            </div>
            <div className="px-6 py-4 text-left text-white">
              <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
              <p className="flex items-center gap-1 mt-5 text-lg font-light">
                <Square /> {item.info}
              </p>
              <p className="flex items-center gap-1 mt-2 text-lg font-light">
                <Square /> {item.weight}
              </p>
              {item.extra && (
                <p className="flex items-center gap-1 mt-2 text-lg font-light">
                  <Square /> {item.extra}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTovars;
