function Section10() {
  return (
    <section id="contact" className="bg-white px-6 py-[50px] text-[#171717] sm:px-10 lg:px-[42px]">
      <div className="mx-auto grid max-w-[895px] items-stretch gap-[32px] lg:grid-cols-[505px_1fr]">
        <div className="grid h-full overflow-hidden border border-[#e5e5e5] bg-white md:grid-cols-[318px_1fr]">
          <div className="px-[23px] pb-[24px] pt-[23px]">
            <h2 className="mb-[16px] text-[24px] font-extrabold leading-none tracking-[-0.02em] text-[#242424]">
              Request a Call Back
            </h2>

            <form className="space-y-[8px]">
              <input
                type="text"
                placeholder="Your Name *"
                className="h-[39px] w-full rounded-[3px] bg-[#f5f5f5] px-[14px] text-[11px] text-[#222] outline-none"
              />
              <input
                type="email"
                placeholder="Email *"
                className="h-[39px] w-full rounded-[3px] bg-[#f5f5f5] px-[14px] text-[11px] text-[#222] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="h-[39px] w-full rounded-[3px] bg-[#f5f5f5] px-[14px] text-[11px] text-[#222] outline-none"
              />
              <textarea
                placeholder="Message"
                className="h-[99px] w-full resize-none rounded-[3px] bg-[#f5f5f5] px-[14px] py-[13px] text-[11px] text-[#222] outline-none"
              />

              <button
                type="submit"
                className="mt-[2px] h-[37px] rounded-[3px] bg-[#cdae55] px-[26px] text-[13px] font-semibold text-white"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="relative min-h-[300px] md:min-h-[376px]">
            <img
              src="/eld-imgs/s10/s10-img.jpg"
              alt="Luxury apartment balcony"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex h-full flex-col justify-center pt-[1px]">
          <h2 className="text-[25px] font-extrabold leading-none tracking-[-0.02em] text-black">
            About Developer
          </h2>

          <div className="mt-[16px] space-y-[18px] text-[13px] font-medium leading-[1.55] text-[#202020]">
            <p>
              Eldeco Group is one of India's most trusted and established real estate
              developers, with a legacy spanning over four decades. Known for
              delivering premium residential, commercial, and integrated township
              developments, the group has consistently created landmark projects that
              blend quality construction, modern architecture, and customer-centric
              design.
            </p>

            <p>
              With a strong presence across multiple cities in North India, Eldeco
              Group has successfully delivered numerous projects and earned the trust
              of thousands of families through timely delivery, transparency, and
              innovation. The brand is recognized for developing thoughtfully planned
              communities that offer luxury, comfort, sustainability, and enhanced
              lifestyle experiences.
            </p>

            <p>
              Driven by excellence and a vision to redefine urban living, Eldeco Group
              continues to craft future-ready developments that combine strategic
              locations, world-class amenities, and superior living standards for
              modern homebuyers and investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section10;
