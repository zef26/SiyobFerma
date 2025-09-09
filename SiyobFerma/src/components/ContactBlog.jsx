import { Mail, Phone } from "lucide-react";
import React from "react";

const SocialIcon = ({ href, src, alt }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#009440] hover:bg-[#066a31] transition-transform duration-300 transform hover:scale-110 border-2 border-white overflow-hidden"
    aria-label={alt}
  >
    <img src={src} alt={alt} className="object-contain w-3/5 h-3/5" />
  </a>
);

const ContactBlog = () => {
  return (
    <div className="px-4 mt-10">
      <div
        data-aos="zoom-in"
        className="w-full bg-gradient-to-br from-[#004332] to-[#017338] rounded-4xl flex flex-col lg:flex-row items-center justify-between gap-6 p-6 lg:p-10 overflow-hidden"
      >
        <h2 className="flex-1 min-w-0 text-3xl font-bold text-center text-white sm:text-4xl md:text-5xl lg:text-6xl lg:text-left">
          Kontaktlarimiz
        </h2>

        <div className="flex-shrink-0 mt-4 lg:mt-0">
          <img
            src="/src/assets/icons/call.png"
            alt="call logo"
            loading="lazy"
            className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[380px] h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 mt-6 md:flex-row">
        <div data-aos="fade-right" className="flex items-center min-w-0 gap-4">
          <div className="bg-[#009440] w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full flex-shrink-0 flex items-center justify-center">
            <Phone color="white" size={20} />
          </div>
          <p className="text-[16px] sm:text-[18px] truncate">
            +998 78 122 10 07
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <SocialIcon
            href="https://www.instagram.com/siyobferma.uz/"
            src="/src/assets/icons/instagram.svg"
            alt="instagram"
          />
          <SocialIcon
            href="https://www.facebook.com/siyobferma.uz"
            src="/src/assets/icons/facebook.svg"
            alt="facebook"
          />
          <SocialIcon
            href="https://t.me/siyobferma_uz"
            src="/src/assets/icons/telegram.svg"
            alt="telegram"
          />
          <SocialIcon
            href="https://www.youtube.com/@SiyobFerma"
            src="/src/assets/icons/youtube.svg"
            alt="youtube"
          />
        </div>

        <div data-aos="fade-left" className="flex items-center min-w-0 gap-4">
          <div className="bg-[#009440] w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full flex-shrink-0 flex items-center justify-center">
            <Mail color="white" size={20} />
          </div>
          <p className="text-[16px] sm:text-[18px] truncate">
            siyobferma.uz@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBlog;
