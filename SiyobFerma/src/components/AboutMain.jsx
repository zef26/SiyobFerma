import React, { useEffect, useRef, useState } from "react";

const AboutMain = () => {
  const containerRef = useRef(null);
  const [frameStyle, setFrameStyle] = useState({});

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const W = el.clientWidth;
      const H = el.clientHeight;
      const VIDEO_RATIO = 16 / 9;
      const r = W / H;

      let width, height, left, top;

      if (r > VIDEO_RATIO) {
        width = W;
        height = W / VIDEO_RATIO;
        left = 0;
        top = (H - height) / 2;
      } else {
        width = H * VIDEO_RATIO;
        height = H;
        left = (W - width) / 2;
        top = 0;
      }

      setFrameStyle({
        position: "absolute",
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
      });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      data-aos="zoom-in"
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-3xl
                 h-[700px] sm:h-[600px] md:h-[550px] lg:h-[500px] mt-[25px]"
    >
      <iframe
        style={frameStyle}
        className="pointer-events-none"
        src="https://www.youtube.com/embed/3vsCMmFfhtQ?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&loop=1&playlist=3vsCMmFfhtQ&playsinline=1"
        title="Siyob Ferma"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      ></iframe>

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Siyob Ferma haqida
        </h1>
      </div>
    </div>
  );
};

export default AboutMain;
