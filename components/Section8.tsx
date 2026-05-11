const locationAdvantages = [
  {
    title: "IMT Manesar",
    distance: "Approx. 5 km",
    description:
      "Strategically located near IMT Manesar, offering seamless access to one of Gurugram's largest industrial and corporate hubs.",
  },
  {
    title: "KMP Expressway",
    distance: "Approx. 6 km",
    description:
      "Enjoy smooth connectivity to major NCR regions via the rapidly expanding KMP Expressway network.",
  },
  {
    title: "Dwarka Expressway",
    distance: "Approx. 10 km",
    description:
      "Well-connected to Dwarka Expressway, ensuring faster travel to Delhi, Gurgaon, and IGI Airport.",
  },
  {
    title: "Airport (IGI), Delhi",
    distance: "Approx. 35 km",
    description:
      "Reach Indira Gandhi International Airport conveniently through NH-48 and Dwarka Expressway connectivity.",
  },
  {
    title: "Medanta",
    distance: "The Medicity - Approx. 18 km",
    description:
      "Premium healthcare facilities like Medanta - The Medicity are easily accessible for world-class medical care.",
  },
  {
    title: "Cyber City, Gurgaon",
    distance: "Approx. 30 km",
    description:
      "Stay close to Gurugram's leading business district and corporate ecosystem at Cyber City.",
  },
];

function Section8() {
  return (
    <section id="location" className="bg-white px-6 pb-[37px] pt-[36px] text-[#181818] sm:px-10 lg:px-[32px]">
      <div className="mx-auto max-w-[960px]">
        <div className="mb-[27px] text-center">
          <h2 className="text-[31px] font-extrabold leading-none tracking-[-0.02em] text-[#202020]">
            Location Advantages
          </h2>
          <p className="mt-[16px] text-[20px] leading-none text-[#3c3c3c]">
            Sector 80, Gurugram
          </p>
        </div>

        <div className="grid items-start gap-[36px] lg:grid-cols-[444px_1fr]">
          <div className="space-y-[18px] pt-[2px]">
            {locationAdvantages.map((item) => (
              <div key={item.title} className="flex gap-[9px]">
                <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-black" />
                <div className="text-[13px] leading-[1.72] text-[#1d1d1d]">
                  <p>
                    <strong className="font-extrabold">{item.title}</strong>
                    <span> - </span>
                    <span>{item.distance}</span>
                  </p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[453px]">
            <img
              src="/eld-imgs/s8/g-map.jpg"
              alt="Google map showing location advantages near Sector 80 Gurugram"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section8;
