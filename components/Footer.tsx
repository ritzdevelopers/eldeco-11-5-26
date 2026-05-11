import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black px-6 pb-[52px] pt-[48px] text-center text-white sm:px-10">
      <div className="mx-auto max-w-[790px]">
        <div className="mb-[30px] flex justify-center">
          <Image
            src="/logo/logo.png"
            alt="Eldeco"
            width={150}
            height={36}
            className="h-auto w-[150px]"
          />
        </div>

        <h2 className="text-[14px] font-extrabold leading-none text-white">
          Disclaimer
        </h2>

        <p className="mx-auto mt-[15px] max-w-[780px] text-[11px] font-medium leading-[1.65] text-white/88">
          This website is for informational purposes only and does not constitute an
          offer to sell or a solicitation to buy any property. All images, plans,
          specifications, amenities, and pricing are indicative and subject to change
          without notice. The content may include artistic impressions and conceptual
          representations. Interested buyers are advised to verify all details,
          including area, pricing, and availability, with the sales team before making
          any decision. The developer reserves the right to make changes in accordance
          with applicable laws and approvals.
        </p>

        <p className="mt-[33px] text-[11px] font-medium text-white/90">
          *T&amp;C Apply
        </p>

        <p className="mt-[31px] text-[11px] font-medium text-white/90">
          © 2026 Eldeco Group. All Rights Reserved. | RERA Registered
        </p>
      </div>
    </footer>
  );
}

export default Footer;
