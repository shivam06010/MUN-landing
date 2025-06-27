function ContactBox({ children, head, desc }) {
  return (
    <div className="bg-[#3b61d574] text-center hover:translate-y-[-15px] transition-all shadow-md rounded-[16px] px-6 py-8">
      <span className="text-center inline-block mb-3">{children}</span>
      <h3 className="text-[20px] font-semibold mb-3">{head}</h3>
      <p className="text-[16px]">{desc}</p>
    </div>
  );
}

export default ContactBox;
