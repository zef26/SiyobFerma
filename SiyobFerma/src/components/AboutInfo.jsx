import React from 'react'

const AboutInfo = () => {
  return (
    <div className="mt-10 space-y-10">
      {/* Текст + картинка */}
      <div className="flex flex-col items-center gap-10 p-6 lg:flex-row lg:gap-20 lg:p-10">
        <div data-aos="fade-right" className="flex flex-col gap-5 [&>p]:text-base md:[&>p]:text-lg lg:[&>p]:text-[20px]">
          <p>
            «SIYOB FERMA» Broyler tovuq go’shti ishlab chiqaruvchi korxonamiz
            Samargand viloyatida joylashgan bo’lib, bugungi kunda yuqori sifatli
            tovuq go’shti mahsulotlari ishlab chiqarish va sotishda yetakchi
            o’rinlarni egallab kelmoqda.
          </p>
          <p>
            Kompaniyamiz 2012-yil tashkil topgan bolib, 240 ta ishchi o’rniga
            ega. Kunlik faoliyatimiz davomida 40 000 tadan ziyod broyler
            jo’jalarini so’yib, xalqimizga sifatli va halol mahsulot yetkazib
            bermoqdamiz.
          </p>
          <p>
            Boshqa raqobatchilarimizdan asosiy afzallik jihatimiz shundaki —
            HALOL standartlariga muvofiq va zamonaviy texnologiyalar bilan
            jihozlangan tovuq so’yish liniyasiga egamiz. Bu esa xalqimizning
            bizga bo’lgan ishonchini yanada orttiradi.
          </p>
          <p>
            «SIYOB FERMA» korxonasi tasarrufida uchta yirik tovuq fermalari
            bo’lib, ular yiliga 10 000 000 dona tovuqning eng yaxshi navlaridan
            biri bo’lgan «Venger ROSS 308» navidan yetkazib berishadi. Korxona
            tomonidan ishlab chiqariladigan parranda go’shti o’zining ajoyib
            ta’mi va yuqori ozuqaviy qiymati bilan mashhur — qimmatli parhez
            mahsulotdir.
          </p>
        </div>
        <img data-aos="fade-left"
          src="src/assets/aboutimgs/about1.png"
          alt="ab1"
          className="rounded-3xl w-full max-w-[400px] object-cover"
        />
      </div>

      {/* Блок из 3 картинок */}
      <div data-aos="fade-up" className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 lg:p-10">
        <img
          src="src/assets/aboutimgs/about2.png"
          alt="ab2"
          className="object-cover w-full rounded-3xl"
        />
        <img
          src="src/assets/aboutimgs/about3.png"
          alt="ab3"
          className="object-cover w-full rounded-3xl"
        />
        <img
          src="src/assets/aboutimgs/about4.png"
          alt="ab4"
          className="object-cover w-full rounded-3xl"
        />
      </div>
    </div>
  )
}

export default AboutInfo
