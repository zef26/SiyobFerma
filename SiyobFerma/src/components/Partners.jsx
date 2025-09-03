    import React from "react";
    import { Swiper, SwiperSlide } from "swiper/react";
    import { Autoplay } from "swiper/modules";

    import "swiper/css";

    const Partners = () => {
    return (
        <div className="m-auto mt-[110px] w-full">
        <h3 className="text-center font-bold leading-tight 
  text-[22px] sm:text-[28px] md:text-[36px] lg:text-[45px] xl:text-[55px]">
  HAMKORLARIMIZ
</h3>

        <Swiper
            
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            }}
            breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
            }}
            className="mt-10 "
        >
            <SwiperSlide className="flex justify-center items-center">
            <img
                src="src/assets/partners/bbq.png"
                alt="partner1"
                className="w-[210px] h-[100px] object-contain"
            />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
            <img
                src="src/assets/partners/bellissimo.png"
                alt="partner2"
                className="w-[210px] h-[100px] object-contain"
            />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
            <img
                src="src/assets/partners/ecobozor.png"
                alt="partner3"
                className="w-[210px] h-[100px] object-contain"
            />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
            <img
                src="src/assets/partners/evos.png"
                alt="partner4"
                className="w-[210px] h-[100px] object-contain"
            />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
            <img
                src="src/assets/partners/korzinka.png"
                alt="partner5"
                className="w-[210px] h-[100px] object-contain"
            />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
            <img
                src="src/assets/partners/makro.png"
                alt="partner6"
                className="w-[210px] h-[100px] object-contain"
            />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
            <img
                src="src/assets/partners/oqtepa.png"
                alt="partner7"
                className="w-[210px] h-[100px] object-contain"
            />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
            <img
                src="src/assets/partners/totus.png"
                alt="partner8"
                className="w-[210px] h-[100px] object-contain"
            />
            </SwiperSlide>
        </Swiper>
        </div>
    );
    };

    export default Partners;
