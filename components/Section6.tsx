"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const galleryImages = [
  {
    src: "/eld-imgs/s6/s6-i1.jpg",
    alt: "Luxury residential towers in Gurgaon",
  },
  {
    src: "/eld-imgs/s6/s6-i2.jpg",
    alt: "Premium apartments with blue sky",
  },
  {
    src: "/eld-imgs/s6/s6-i1.jpg",
    alt: "Modern luxury apartment community",
  },
];

function Section6() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <section id="gallery" className="bg-white px-6 py-[47px] text-[#111] sm:px-10 lg:px-[46px]">
      <div className="mx-auto max-w-[934px]">
        <div className="mb-[27px] flex items-start justify-between gap-8">
          <div>
            <h2 className="text-[31px] font-extrabold leading-[1.08] tracking-[-0.025em] text-black">
              Your Gateway To Luxury Living
            </h2>
            <p className="mt-[8px] max-w-[670px] text-[19px] leading-[1.6] text-[#171717]">
              Discover luxury apartments in Sector 80 Gurgaon with premium amenities,
              modern living, & seamless connectivity.
            </p>
          </div>

          <div className="mt-[43px] hidden shrink-0 items-center gap-[17px] text-[27px] leading-none text-black md:flex">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => swiper?.slidePrev()}
              className="transition hover:text-[#c9a846]"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => swiper?.slideNext()}
              className="transition hover:text-[#c9a846]"
            >
              →
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={setSwiper}
          spaceBetween={16}
          slidesPerView={1}
          loop
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
          }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={`${image.src}-${index}`}>
              <div className="relative h-[322px] overflow-hidden rounded-[3px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-[22px] flex justify-center md:hidden">
          <div className="flex items-center gap-6 text-[27px] leading-none text-black">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => swiper?.slidePrev()}
              className="transition hover:text-[#c9a846]"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => swiper?.slideNext()}
              className="transition hover:text-[#c9a846]"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-[22px] flex justify-center">
          <button
            type="button"
            className="h-[38px] rounded-[4px] bg-[#c9a846] px-[27px] text-[13px] font-extrabold text-white"
          >
            See All Photos
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section6;
