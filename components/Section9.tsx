import Image from "next/image";

function Section9() {
  return (
    <section id="virtual-tour" className="relative isolate min-h-[367px] bg-black overflow-hidden px-6 py-[58px] text-white sm:px-10 lg:px-[49px]">
      <Image
        src="/eld-imgs/s9/s9-i1.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/62" />

      <div className="mx-auto grid max-w-[927px] items-center gap-[48px] lg:grid-cols-[466px_1fr]">
        <div className="relative h-[258px] overflow-hidden rounded-[22px] shadow-[0_12px_32px_rgba(0,0,0,0.32)]">
          <Image
            src="/eld-imgs/s9/s9-bg.jpg"
            alt="Virtual site tour preview"
            fill
            sizes="(max-width: 1024px) 100vw, 466px"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              aria-label="Play virtual site tour"
              className="flex h-[44px] w-[61px] items-center justify-center rounded-[8px] bg-[#ff0000] shadow-[0_8px_18px_rgba(0,0,0,0.28)]"
            >
              <span className="ml-[4px] h-0 w-0 border-y-[11px] border-l-[17px] border-y-transparent border-l-white" />
            </button>
          </div>
        </div>

        <div className="relative">
          

          <h2 className="text-[31px] font-extrabold leading-none tracking-[-0.02em] text-[#d8b94d]">
            Virtual Site Tour
          </h2>
          <p className="mt-[13px] text-[19px] leading-none text-white">
            Experience Luxury Living Virtually
          </p>
          <p className="mt-[20px] max-w-[420px] text-[13px] font-medium leading-[1.75] text-white/90">
            Experience sophisticated residences, premium amenities, vibrant green
            environments, and well-crafted living spaces through this highly engaging
            experience, virtually! Come experience the style, luxury, and modern
            lifestyle that are redefining life in Sector 80, Gurugram.
          </p>

          <button
            type="button"
            className="mt-[34px] h-[45px] w-[202px] rounded-[4px] bg-gradient-to-r from-[#c59c35] to-[#f0dd7b] text-[13px] font-extrabold text-black"
          >
            Request E-Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section9;
