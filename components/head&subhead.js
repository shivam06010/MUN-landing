function HeadAndSubhead({ head, subHead }) {
  return (
    <div className="mx-auto max-w-[770px] text-center pt-18 pb-15">
      <h2 className="text-[36px] font-bold mb-2">{head}</h2>
      <p className="text-[22px] text-[#616161]">{subHead}</p>
    </div>
  );
}

export default HeadAndSubhead;
