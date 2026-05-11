"use client";

import { useState } from "react";

const amenities = [
  {
    title: "All Weather Infinity pool",
    image: "/eld-imgs/s4/s4-i1.jpg",
    icon: <WaveIcon />,
  },
  {
    title: "Lawn tennis court",
    image: "/eld-imgs/s4/s4-i1.jpg",
    icon: <TennisIcon />,
  },
  {
    title: "Yoga & aerobics",
    image: "/eld-imgs/s4/s4-i1.jpg",
    icon: <YogaIcon />,
  },
  {
    title: "Jogging and fitness tracks",
    image: "/eld-imgs/s4/s4-i1.jpg",
    icon: <FitnessIcon />,
  },
  {
    title: "Landscaped podium greens",
    image: "/eld-imgs/s4/s4-i1.jpg",
    icon: <GardenIcon />,
  },
  {
    title: "Badminton, Cricket, & Squash Court",
    image: "/eld-imgs/s4/s4-i1.jpg",
    icon: <RacketIcon />,
  },
  {
    title: "3 High-Speed Lift Per Tower",
    image: "/eld-imgs/s4/s4-i1.jpg",
    icon: <LiftIcon />,
  },
  {
    title: "Exclusive GQ Club",
    image: "/eld-imgs/s4/s4-i1.jpg",
    icon: <ClubIcon />,
  },
];

function Section4() {
  const [activeAmenity, setActiveAmenity] = useState(0);

  return (
    <section id="amenities" className="bg-white px-6 py-[52px] text-[#202020] sm:px-10 lg:px-11">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-[27px] text-center">
          <h2 className="text-[31px] font-extrabold leading-tight tracking-[-0.02em] text-[#232323]">
            Modern Amenities
          </h2>
          <p className="mt-[9px] text-[20px] leading-none text-[#202020]">
            Best Amenities In Gurgaon Residences
          </p>
        </div>

        <div className="grid items-stretch gap-[14px] lg:grid-cols-[328px_1fr]">
          <div className="grid grid-cols-2 gap-x-[14px] gap-y-[13px]">
            {amenities.map((amenity, index) => {
              const isActive = activeAmenity === index;

              return (
                <button
                  key={amenity.title}
                  type="button"
                  onClick={() => setActiveAmenity(index)}
                  className={`flex h-[78px] flex-col items-center justify-center rounded-[5px] border text-center transition ${
                    isActive
                      ? "border-[#cfb35c] bg-gradient-to-r from-[#c59c35] to-[#e2d37a] text-white shadow-sm"
                      : "border-[#dedede] bg-white text-[#1f1f1f]"
                  }`}
                >
                  <span
                    className={`mb-[8px] flex h-[27px] items-center justify-center ${
                      isActive ? "text-white" : "text-[#222]"
                    }`}
                  >
                    {amenity.icon}
                  </span>
                  <span className="max-w-[132px] text-[11px] font-medium leading-[15px]">
                    {amenity.title}
                  </span>
                </button>
              );
            })}

            <button
              type="button"
              className="col-span-2 mt-[5px] h-[46px] rounded-[4px] bg-gradient-to-r from-[#c39a34] to-[#e3d57c] text-[13px] font-bold text-white"
            >
              View All Amenities
            </button>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[13px] sm:min-h-[416px]">
            <img
              key={activeAmenity}
              src={amenities[activeAmenity].image}
              alt={amenities[activeAmenity].title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WaveIcon() {
  return (
    <svg width="31" height="27" viewBox="0 0 31 27" fill="none" aria-hidden="true">
      <path d="M3 9c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 7 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 14c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 7 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 19c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 7 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TennisIcon() {
  return (
    <svg width="31" height="27" viewBox="0 0 31 27" fill="none" aria-hidden="true">
      <circle cx="17" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m13.5 11.5-8 8M8 17l4 4M5 22h19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function YogaIcon() {
  return (
    <svg width="31" height="27" viewBox="0 0 31 27" fill="none" aria-hidden="true">
      <circle cx="15.5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 8v6M10 13l5.5-2 5.5 2M8 22c4-4 11-4 15 0M12 17l-4 5M19 17l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FitnessIcon() {
  return (
    <svg width="31" height="27" viewBox="0 0 31 27" fill="none" aria-hidden="true">
      <path d="M6 18h19M8 15h15M11 12h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 8h7l-2 4h-3l-2-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="21" r="1.5" fill="currentColor" />
      <circle cx="21" cy="21" r="1.5" fill="currentColor" />
    </svg>
  );
}

function GardenIcon() {
  return (
    <svg width="31" height="27" viewBox="0 0 31 27" fill="none" aria-hidden="true">
      <path d="M15.5 22V11M15.5 14c-5-1-6-5-5-9 4 1 6 4 5 9ZM15.5 15c4-1 6-4 6-8-4 1-6 4-6 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 22h15M23 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function RacketIcon() {
  return (
    <svg width="31" height="27" viewBox="0 0 31 27" fill="none" aria-hidden="true">
      <ellipse cx="13" cy="8" rx="4" ry="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m15.5 12.5 5.5 6M19 17l-3 3M10 8h6M13 3v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="23.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function LiftIcon() {
  return (
    <svg width="31" height="27" viewBox="0 0 31 27" fill="none" aria-hidden="true">
      <rect x="8" y="3" width="15" height="21" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 3v21M11 7h3M17 7h3M11 20h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="m12 13 2-2 2 2M19 11l-2 2-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClubIcon() {
  return (
    <svg width="31" height="27" viewBox="0 0 31 27" fill="none" aria-hidden="true">
      <path d="M6 23h19M8 21V10l7.5-5 7.5 5v11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 21v-6h9v6M10 10h11M13 10V8h5v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Section4;