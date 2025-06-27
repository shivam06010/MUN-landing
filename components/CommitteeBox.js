import Link from "next/link";

function CommitteeBox({ children, color, heading, subheading, desc }) {
  return (
    <div
      className={`bg-white  px-8 py-8 rounded-[12px] shadow-md border-t-6 hover:translate-y-[-15px] transition-all `}
      style={{ borderTopColor: color }}
    >
      <span className=" inline-block mb-3">{children}</span>
      <h2 className="text-[22px] font-semibold mb-2">{heading}</h2>
      <h3 className="text-[14px] font-medium mb-4">{subheading}</h3>
      <p className="text-[16px] mb-6 text-[#7a7a7a]">{desc}</p>
      <Link href="" className="text-[#306feb]">
        Learn More
      </Link>
    </div>
  );
}

export default CommitteeBox;
