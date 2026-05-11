import type { ReactNode } from "react";

const leftHighlights = [
  {
    text: "Amenities: World-class lifestyle & wellness amenities",
    icon: <AmenityIcon />,
  },
  {
    text: "Spacious balconies with abundant natural light & airflow",
    icon: <BalconyIcon />,
  },
  {
    text: "Multi-tier security system with 24x7 CCTV surveillance",
    icon: <SecurityIcon />,
  },
];

const rightHighlights = [
  {
    text: "Strategically located near NH-48, Dwarka Expressway & KMP Expressway",
    icon: <RoadIcon />,
  },
  {
    text: "Seamless connectivity to Cyber City, IMT Manesar & IGI Airport",
    icon: <CityIcon />,
  },
  {
    text: "Nearby reputed schools, hospitals, malls, & business hubs",
    icon: <BuildingIcon />,
  },
];

function Section3() {
  return (
    <section
      id="highlights"
      className="overflow-hidden bg-black px-6 pb-[35px] pt-[43px] text-white sm:px-10 lg:px-[58px]"
    >
      <div className="mx-auto max-w-[860px] text-center">
        <h2 className="text-[31px] font-extrabold leading-none tracking-[-0.02em]">
          Key Highlights
        </h2>

        <div className="mt-[25px] grid items-center gap-8 lg:grid-cols-[180px_1fr_180px] lg:gap-[28px]">
          <div className="flex h-full flex-col justify-between gap-[34px]">
            {leftHighlights.map((highlight) => (
              <HighlightCard key={highlight.text} {...highlight} />
            ))}
          </div>

          <div className="relative mx-auto flex h-[331px] w-full max-w-[500px] items-center justify-center">
            <div className="absolute left-[6px] top-[8px] h-[290px] w-[300px] rounded-[50%] border border-white/45" />
            <div className="absolute right-[6px] top-[8px] h-[290px] w-[300px] rounded-[50%] border border-white/45" />

            <div className="relative z-10 h-[310px] w-[310px]">
              <img
                src="/eld-imgs/s3/s3-img1.png"
                alt="Eldeco luxury towers"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="flex h-full flex-col justify-between gap-[34px]">
            {rightHighlights.map((highlight) => (
              <HighlightCard key={highlight.text} {...highlight} />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="mt-[18px] h-[43px] rounded-[4px] bg-[#d3b65b] px-[27px] text-[13px] font-extrabold text-white"
        >
          Explore More Highlights
        </button>
      </div>
    </section>
  );
}

function HighlightCard({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-[11px] flex h-[35px] items-center justify-center text-[#d3b65b]">
        {icon}
      </div>
      <p className="max-w-[172px] text-[12px] font-medium leading-[1.45] text-white">
        {text}
      </p>
    </div>
  );
}

function AmenityIcon() {
  return (
    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" aria-hidden="true">
      <path d="M7 15h15v12H7V15Z" stroke="currentColor" strokeWidth="2" />
      <path d="M10 19h3M16 19h3M10 23h3M16 23h3M4 27h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M27 12c4 3 4 9 0 12M30 8c6 5 6 14 0 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="6" cy="8" r="2" fill="currentColor" />
      <path d="M11 5c-3 0-5 2-5 5M15 8c-5-3-11 0-12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BalconyIcon() {
  return (
    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" aria-hidden="true">
      <path d="M8 12h21M10 12v15M15 12v15M20 12v15M25 12v15M6 27h25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 9h23M10 6h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" aria-hidden="true">
      <path d="M8 11 20 6l9 4v5c0 7-4 12-9 14-5-2-9-7-9-14v-4Z" fill="currentColor" opacity=".9" />
      <path d="m14 21 5-5 4 4 6-7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 25 18 12M21 9l5-5 3 3-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" aria-hidden="true">
      <path d="M11 29 17 6h3l6 23M18.5 10v4M18.5 18v4M18.5 26v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 29h21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 8c2-2 4-3 7-3-1 3-2 5-5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CityIcon() {
  return (
    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" aria-hidden="true">
      <path d="M7 29V16h8v13M15 29V9h8v20M23 29V14h7v15M5 29h27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 19h2M10 23h2M18 13h2M18 17h2M18 21h2M26 18h1.5M26 22h1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 5h5l-2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" aria-hidden="true">
      <path d="M6 29V11h10v18M21 29V6h10v23M4 29h29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 15h2M10 20h2M10 25h2M25 10h2M25 15h2M25 20h2M25 25h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default Section3;
