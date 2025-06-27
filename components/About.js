import AboutBox from "./about-box";
import HeadAndSubhead from "./head&subhead";
import { LuUsersRound } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";

function About() {
  return (
    <div className="pb-25 pt-[50px]" id="about">
      <HeadAndSubhead
        head="About Model UN"
        subHead=" Model United Nations is an educational simulation where students
        role-play as delegates to the United Nations, debating current issues
        and developing diplomatic solutions."
      />

      <div className="grid grid-cols-[1fr_1fr_1fr] gap-8 max-w-[1200px] mx-auto text-center">
        <AboutBox
          heading="Diplomacy"
          desc="Engage in meaningful diplomatic negotiations and build consensus across diverse perspectives."
        >
          <LuUsersRound
            size={70}
            className="text-white bg-[#306feb] px-4 py-4 rounded-full"
          />
        </AboutBox>
        <AboutBox
          heading="Public Speaking"
          desc="Develop confidence and eloquence while representing nations on the global stage.

"
        >
          <FaMicrophone
            size={70}
            className="text-white bg-[#306feb] px-4 py-4 rounded-full"
          />
        </AboutBox>
        <AboutBox
          heading="Global Engagement"
          desc="Explore international relations and understand complex global challenges firsthand."
        >
          <FiGlobe
            size={70}
            className="text-white bg-[#306feb] px-4 py-4 rounded-full"
          />
        </AboutBox>
      </div>
    </div>
  );
}

export default About;
