function AboutBox({ children, heading, desc }) {
  return (
    <div className="bg-white hover:translate-y-[-15px] transition-all shadow-md rounded-[16px] px-6 py-8">
      <span className="text-center inline-block mb-3">{children}</span>
      <h3 className="text-[22px] font-semibold mb-5">{heading}</h3>
      <p className="text-[16px] text-[#7a7a7a]">{desc}</p>
    </div>
  );
}

export default AboutBox;
