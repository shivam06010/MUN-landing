import CommitteeBox from "./CommitteeBox";
import HeadAndSubhead from "./head&subhead";
import { IoShieldOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

function Committees() {
  return (
    <div className="bg-white pb-20" id="committees">
      <HeadAndSubhead
        head="Our Committees"
        subHead="Choose from our carefully curated committees, each tackling pressing
        global issues that shape our world today."
      />

      <div className="grid grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        <CommitteeBox
          subheading="United Nations Security Council"
          heading="UNSC"
          desc="Addressing Regional Conflicts and Peacekeeping Operations"
          color="#d32f2f"
        >
          <IoShieldOutline
            size={70}
            className="text-white bg-[#d32f2f] px-4 py-4 rounded-full"
          />
        </CommitteeBox>
        <CommitteeBox
          subheading="World Health Organization"
          heading="WHO"
          desc="Global Health Challenges and Pandemic Preparedness"
          color="#1a9848"
        >
          <FaRegHeart
            size={70}
            className="text-white bg-[#1a9848] px-2 py-4 rounded-full"
          />
        </CommitteeBox>
        <CommitteeBox
          subheading="International Court of Justice"
          heading="ICJ"
          desc="Maritime Boundary Disputes and International Law"
          color="#9640E6"
        >
          <FaBalanceScale
            size={70}
            className="text-white bg-[#9640E6] px-4 py-4 rounded-full"
          />
        </CommitteeBox>
      </div>
    </div>
  );
}

export default Committees;
