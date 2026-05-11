"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  "/eld-imgs/home/home-s1.jpg",
  "/eld-imgs/home/home-s1.jpg",
  "/eld-imgs/home/home-s1.jpg",
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const previousSlide = () => {
    setActiveSlide((slide) => (slide === 0 ? slides.length - 1 : slide - 1));
  };

  const nextSlide = () => {
    setActiveSlide((slide) => (slide === slides.length - 1 ? 0 : slide + 1));
  };

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden   text-white">
      <div className="absolute inset-0 -z-10">
        {slides.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt="Iconic luxury apartments in Gurgaon"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      </div>

      <div className="absolute left-1/2 top-[14%] w-full max-w-[1100px] -translate-x-1/2 px-6 sm:px-12 lg:px-0">
        <div className="ml-auto text-right text-[9px] font-medium leading-tight text-white/90">
          Project RERA No.: GGM/XXXX/XXX/2023/XX Dated: 11.02.2026
          <br />
          Agent RERA No.: RC/HARERA/GGM/XXXX/2023/22
          <br />
          https://haryanarera.gov.in/
        </div>
      </div>

      <div className="mx-auto flex min-h-screen max-w-[1100px] items-end px-6 pb-20 sm:px-12 lg:px-0">
        <div className="mb-8 w-full max-w-[600px] text-center">
          <h1 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl">
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
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                Starting Price
              </p>
              <p className="text-2xl font-bold">₹2.99 Cr*</p>
            </div>

            <div className="h-12 w-px bg-white/55" />

            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                Pre Launch Benefit
              </p>
              <p className="text-2xl font-bold">₹55 Lakh*</p>
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

          <p className="flex items-center justify-center text-center gap-2 text-sm font-semibold">
            <span>●</span>
            At Sector 80, Gurugram
          </p>
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 w-full max-w-[1100px] -translate-x-1/2 px-6 sm:px-12 lg:px-0">
        <div className="ml-auto flex w-fit items-center gap-5">
          <div className="flex items-center gap-4 text-sm font-bold">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`border-b pb-1 transition ${
                  activeSlide === index
                    ? "border-white text-white"
                    : "border-transparent text-white/75"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          <div className="h-px w-28 bg-white/45" />

          <button type="button" onClick={previousSlide} className="text-2xl">
            ‹
          </button>
          <button type="button" onClick={nextSlide} className="text-2xl">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;