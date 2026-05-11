const stats = [
  { value: "G+30", label: "Floors" },
  { value: "Only 2", label: "Towers" },
  { value: "224", label: "Total units" },
  { value: "2.7 Acres", label: "Land Parcel" },
];

function Section2() {
  return (
    <section id="overview" className="bg-white px-6 py-16 text-[#2a2a2a] sm:px-10 lg:px-12">
      <div className="mx-auto grid max-w-[1100px] items-stretch gap-0 lg:grid-cols-[1.1fr_0.92fr]">

        {/* Left Side Container  */}
        <div className="flex h-full flex-col pr-0 lg:pr-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-[#b07b2d]">
            Overview
          </p>

          <div className="space-y-5 text-[15px] leading-7 text-[#333]">
            <p>
              Premium residential property in Gurugram from Eldeco Group. It is an
              exceptional fusion of luxurious comfort and unparalleled connectivity
              and modern metropolitan living. An over{" "}
              <strong>2.7 acre property</strong> with{" "}
              <strong>200 well-appointed homes</strong> and 40+ international
              standard lifestyle features.
            </p>

            <p>
              Only <strong>4 apartments per core</strong>, this residential project,
              consisting of <strong>3 BHK and 3.5 BHK luxury apartments</strong> at
              Sector 80, has been conceptualized for the select few, offering absolute
              privacy and exclusivity. All the apartments have been designed to
              provide maximum refreshing airflow and abundant natural light and
              cross-ventilation, built more than 30 feet above the ground level.
            </p>

            <p>
              An array of thoughtfully planned and meticulously curated amenities add
              the touch of rejuvenation and recreation to your lifestyle at{" "}
              <strong>Eldeco Terra & Sol.</strong>
            </p>
          </div>

          <div className="relative mt-5 min-h-[260px] flex-1 overflow-hidden sm:min-h-[300px]">
            <img
              src="/eld-imgs/s2/s2-img.jpg"
              alt="Luxury apartment living room"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Side Container  */}
        <div className="flex h-full flex-col">
          <div className="border border-neutral-200 px-8 py-8">
            <h2 className="mb-5 text-2xl font-bold text-[#2a2a2a] sm:text-3xl">
              Request a Call Back
            </h2>

            <form className="space-y-2">
              <input
                type="text"
                placeholder="Your Name *"
                className="h-12 w-full bg-neutral-100 px-4 text-xs outline-none"
              />
              <input
                type="email"
                placeholder="Email *"
                className="h-12 w-full bg-neutral-100 px-4 text-xs outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="h-12 w-full bg-neutral-100 px-4 text-xs outline-none"
              />
              <textarea
                placeholder="Message"
                className="h-20 w-full resize-none bg-neutral-100 px-4 py-4 text-xs outline-none"
              />

              <button
                type="submit"
                className="mt-1 bg-[#cdae55] px-8 py-3 text-sm font-semibold text-white"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="grid flex-1 grid-cols-2 content-center gap-x-8 gap-y-6 px-4 py-7 text-center">
            {stats.map((item) => (
              <div key={item.label} className="border-b border-[#e6cfa1] pb-5">
                <p className="text-3xl font-extrabold text-black">{item.value}</p>
                <p className="mt-2 text-xs text-black">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button className="flex items-center justify-center gap-3 bg-[#cdae55] px-6 py-4 text-sm font-semibold text-white">
              Download Brochure
              <span className="text-lg leading-none">↓</span>
            </button>

            <button className="border border-[#cdae55] px-6 py-4 text-sm font-semibold text-black">
              Book a Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;