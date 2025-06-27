import Image from "next/image";
import HeadAndSubhead from "./head&subhead";

function Team() {
  return (
    <div className="pb-20" id="team">
      <HeadAndSubhead
        head="Meet Our Team"
        subHead="Our dedicated organizing committee brings together passionate students committed to delivering an exceptional Model UN experience."
      />

      <div className="flex justify-between max-w-[1200px] mx-auto">
        <main className="text-center ">
          <div className="relative w-[200px] mb-3 overflow-hidden h-[200px]">
            <Image
              fill
              className="rounded-full object-cover object-top"
              alt="image"
              src="/images/p1.jpeg"
            />
          </div>
          <h3 className="text-[20px] font-medium">NAME 1</h3>
          <p className="text-[#306feb] text-[16px]">General Sec</p>
        </main>
        <main className="text-center ">
          <div className="relative w-[200px] mb-3 overflow-hidden h-[200px]">
            <Image
              fill
              className="rounded-full object-cover object-top"
              alt="image"
              src="/images/p2.jpeg"
            />
          </div>
          <h3 className="text-[20px] font-medium">NAME 2</h3>
          <p className="text-[#306feb] text-[16px]">General Sec</p>
        </main>
        <main className="text-center ">
          <div className="relative w-[200px] mb-3 overflow-hidden h-[200px]">
            <Image
              fill
              className="rounded-full object-cover object-top"
              alt="image"
              src="/images/p3.jpeg"
            />
          </div>
          <h3 className="text-[20px] font-medium">NAME 3</h3>
          <p className="text-[#306feb] text-[16px]">General Sec</p>
        </main>
        <main className="text-center ">
          <div className="relative w-[200px] mb-3 overflow-hidden h-[200px]">
            <Image
              fill
              className="rounded-full object-cover object-top"
              alt="image"
              src="/images/p4.jpeg"
            />
          </div>
          <h3 className="text-[20px] font-medium">NAME 4</h3>
          <p className="text-[#306feb] text-[16px]">General Sec</p>
        </main>
      </div>
    </div>
  );
}

export default Team;
