import Image from "next/image";

const planSections = [
  {
    title: "Master Plan",
    image: "/eld-imgs/s7/s7-i1.jpg",
    imagePosition: "right",
  },
  {
    title: "Floor Plans",
    image: "/eld-imgs/s7/s7-i2.jpg",
    imagePosition: "left",
  },
];

function Section7() {
  return (
    <section id="plans" className="bg-white px-6 py-[30px] sm:px-10 lg:px-[46px]">
      <div className="mx-auto max-w-[932px] space-y-[51px]">
        {planSections.map((section) => {
          const imageBlock = (
            <div className="relative min-h-[280px] overflow-hidden md:min-h-[328px]">
              <Image
                src={section.image}
                alt={section.title}
                fill
                sizes="(max-width: 768px) 100vw, 466px"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="h-[38px] rounded-[4px] bg-gradient-to-r from-[#c59c35] to-[#e2d37a] px-[25px] text-[13px] font-extrabold text-white shadow-sm"
                >
                  Request A Call
                </button>
              </div>
            </div>
          );

          const titleBlock = (
            <div className="flex min-h-[210px] items-center px-[30px] md:min-h-[328px]">
              <h2 className="text-[31px] font-extrabold leading-none tracking-[-0.02em] text-black">
                {section.title}
              </h2>
            </div>
          );

          return (
            <div
              key={section.title}
              className="grid overflow-hidden rounded-[10px] border border-[#d7c783] md:grid-cols-2"
            >
              {section.imagePosition === "left" ? imageBlock : titleBlock}
              {section.imagePosition === "left" ? titleBlock : imageBlock}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Section7;
