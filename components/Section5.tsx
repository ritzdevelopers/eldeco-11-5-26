import Image from "next/image";

const priceCards = [
  {
    type: "3 BHK",
    price: "₹ 2.99 Cr*",
  },
  {
    type: "3.5 BHK",
    price: "₹ On Request",
  },
];

function Section5() {
  return (
    <section id="price" className="relative isolate min-h-[646px] bg-black overflow-hidden flex justify-center items-center text-white ">
      <Image
        src="/eld-imgs/s5/s5-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto  max-w-[1024px]">
        <div className="text-center">
          <h2 className="text-[31px] font-extrabold leading-none tracking-[-0.02em]">
            Our Price
          </h2>
          <p className="mt-[13px] text-[19px] leading-none">
            Luxury Apartments At Prime Prices
          </p>
        </div>

        <div className="mx-auto mt-[38px] grid  gap-[65px] md:grid-cols-2">
          {priceCards.map((card) => (
            <article
              key={card.type}
              className="min-h-[380px] rounded-[4px] border border-[#d6c66e]/50 bg-[#cdb754]/85 px-[10px] pb-[26px] pt-[20px] text-center shadow-[0_6px_18px_rgba(0,0,0,0.25)] backdrop-blur-[1px] w-[382px] "
            >
              <h3 className="text-[24px] font-extrabold leading-none text-white">
                Apartments
              </h3>

              <div className="mt-[20px] rounded-[6px] bg-white px-4 py-[14px] text-[#171717]">
                <p className="text-[11px] leading-none text-[#5f5f5f]">Type</p>
                <p className="mt-[10px] text-[15px] font-extrabold leading-none">
                  {card.type}
                </p>
              </div>

              <div className="mt-[28px]">
                <p className="text-[14px] leading-none text-white">Price</p>
                <p className="mt-[11px] text-[18px] font-extrabold leading-none text-white">
                  {card.price}
                </p>
              </div>

              <button
                type="button"
                className="mt-[27px] h-[47px] w-[202px] rounded-[3px] border border-[#25220f] text-[13px] font-extrabold text-[#171717]"
              >
                Get Price Details
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5;
