import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

function HeroSection() {
  return (
    <div className="bg-[url(/images/bg.png)] bg-cover bg-top pt-18 mt-18 pb-12">
      <header className="h-[500px] mx-auto max-w-[1200px] text-center  text-white ">
        <h1 className="font-bold  text-[72px] bg-gradient-to-br from-[#ad3c3c]  via-[#99CEEB] to-[#3CA9E4] bg-clip-text text-transparent">
          IIT (BHU) Varanasi
        </h1>
        <h2 className="bg-gradient-to-br text-[64px] mb-8 font-semibold from-[#20D3F2]  to-[#DD69D7] bg-clip-text text-transparent ">
          MUN 2025
        </h2>

        <p className=" text-[18px] mb-10 font-extralight">
          Experience two days of intense diplomacy, global policymaking, and
          leadership at IIT (BHU) MUN 2025 where young minds shape tomorrow’s
          international dialogue.
        </p>

        <div className="flex gap-10 mb-12 justify-center font-light">
          <span className="flex gap-2 items-center">
            <FaRegCalendar />
            <span>March 15-17, 2025</span>
          </span>
          <span className="flex gap-2 items-center">
            <IoLocationSharp />
            <span>ABLT-4, IIT BHU</span>
          </span>
        </div>

        <div className="flex gap-6 justify-center">
          <Link
            className="px-6 py-2 hover:scale-105 transition-all bg-linear-to-br from-[#0425ba] to-[#0531f5] rounded-full"
            href="/registeration"
          >
            Register Now
          </Link>
          <a
            className="px-6 transition-all hover:scale-105 py-2 border-2 border-white rounded-full"
            href="#about"
          >
            Learn More
          </a>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
