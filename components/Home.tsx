"use client";

import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import styles from "./page.module.css";

const slides = [
   "/imgs/eld-img-2.jpg",
  "/imgs/slider2.jpg",
  "/imgs/slider1.jpg",
 
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  const previousSlide = () => {
    swiper?.slidePrev();
  };

  const nextSlide = () => {
    swiper?.slideNext();
  };

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden   text-white">
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiper}
          onSlideChange={(slider) => setActiveSlide(slider.realIndex)}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full w-full"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={`${src}-${index}`}>
              <img
                src={src}
                alt="Iconic luxury apartments in Gurgaon"
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" /> */}
      </div>

      <div className="absolute left-1/2 top-[9%] w-full max-w-[1250px] -translate-x-1/2 px-6 sm:px-12 lg:px-0">
        <div className={`${styles.paragraph} ml-auto w-fit rounded-[4px] bg-black/45 px-3 py-2 text-right text-[9px] font-[400] leading-tight text-white/90 backdrop-blur-[2px]`}>
          Project RERA No.: GGM/XXXX/XXX/2023/XX Dated: 11.02.2026
          <br />
          Agent RERA No.: RC/HARERA/GGM/XXXX/2023/22
          <br />
          https://haryanarera.gov.in/
        </div>
      </div>

      <div className="mx-auto flex min-h-screen max-w-[1250px] items-end px-6 pb-[60px] md:pb-0 sm:px-12 xl:px-0">
        <div className="mb-8 w-full max-w-[600px] text-center">
          <h1 className={`${styles.heading} mb-3 text-2xl font-bold leading-tight sm:text-3xl`}>
            Iconic Luxury Apartments In Gurgaon
          </h1>

          <div className="mb-4 grid max-w-[600px] grid-cols-1 text-sm font-bold text-white sm:grid-cols-[1fr_1.1fr]">
            <div className="border border-white/65 bg-black/25 px-5 py-4">
              Ultra Luxurious Apartments
            </div>
            <div className="bg-white px-5 py-4 text-neutral-900">
              3 /3.5 BHK Premium Residences
            </div>
          </div>

          <div className="mb-3 w-full justify-center items-center flex gap-7">
            <div>
              <p className={`${styles.paragraph} mb-1 text-[10px] font-semibold uppercase tracking-wider text-white/80`}>
                Starting Price
              </p>
              <p className={`${styles.paragraph} text-2xl font-bold`}>₹3.11 Cr*</p>
            </div>

            <div className="h-12 w-px bg-white/55" />

            <div>
              <p className={`${styles.paragraph} mb-1 text-[10px] font-semibold uppercase tracking-wider text-white/80`}>
              Nothing for 36 Months
              </p>
              <p className={`${styles.paragraph} text-2xl font-bold`}>Pay 30% Now</p>
            </div>
          </div>

          <div className="mb-4 inline-flex flex-wrap w-full justify-center items-center bg-[#c9a032] px-4 py-2 text-xs font-semibold text-white">
            <span>Luxurious Properties</span>
            <span className="mx-3 h-4 w-px bg-white/70" />
            <span>Prime Locations</span>
            <span className="mx-3 h-4 w-px bg-white/70" />
            <span>Wrapped Balconies</span>
            <span className="mx-3 h-4 w-px bg-white/70" />
            <span>Virtual Visit</span>
          </div>

          <p className={`${styles.paragraph} flex items-center justify-center text-center gap-2 text-sm font-semibold`}>
            <span>●</span>
            At Sector 80, Gurugram
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 lg:bottom-14 md:-right-8 lg:right-0 lg:left-1/2 w-full left-1/2 -translate-x-1/2 max-w-[1250px] lg:-translate-x-1/2 px-6 sm:px-12 lg:px-0">
        <div className="ml-auto flex w-fit items-center gap-5">
          <div className="flex items-center gap-4 text-sm font-bold">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => swiper?.slideToLoop(index)}
                className={`border-b pb-1 transition ${styles.heading} ${
                  activeSlide === index
                    ? "border-white text-white"
                    : "border-transparent text-white/75"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
          <div className="h-px w-28 bg-white" />

         <div className="flex items-center gap-0">
         <button type="button" onClick={previousSlide} className="cursor-pointer">
           <img src="/lft.svg" alt="" className="w-[25px] h-[25px]"/>
          </button>
          <button type="button" onClick={nextSlide} className="cursor-pointer">
          <img src="/rght.svg" alt="" className="w-[25px] h-[25px]"/>
          </button>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Home;