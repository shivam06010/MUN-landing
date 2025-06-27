import ContactBox from "./ContactBox";
import HeadAndSubhead from "./head&subhead";
import { HiOutlinePhone } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

function Contact() {
  return (
    <div className="bg-[#1D3D9A] text-white pb-20" id="contact">
      <div className="mx-auto max-w-[770px] text-center pt-20 pb-15">
        <h2 className="text-[36px] font-bold mb-4">Get In Touch</h2>
        <p className="text-[22px] text-white] opacity-80">
          Get In Touch Have questions about the conference? We are here to help!
          Reach out to us through any of the channels below
        </p>
      </div>

      <section className="grid grid-cols-3 max-w-[1200px] mb-20 mx-auto gap-7">
        <ContactBox head="Phone" desc="+910987654321">
          <HiOutlinePhone
            size={70}
            className="text-[#1d3d9a] bg-[#FAAE2E] px-2 py-4 rounded-full"
          />
        </ContactBox>
        <ContactBox head="Email" desc="mun@iitbhu.ac.in">
          <IoMdMail
            size={70}
            className="text-[#1d3d9a] bg-[#FAAE2E] px-2 py-4 rounded-full"
          />
        </ContactBox>
        <ContactBox head="Instagram" desc="@iitbhu_mun">
          <FaInstagram
            size={70}
            className="text-[#1d3d9a] bg-[#FAAE2E] px-2 py-4 rounded-full"
          />
        </ContactBox>
      </section>
      <div className="text-center mb-4">
        <Link
          href=""
          className="bg-[#21C55D] inline-block text-white px-6 py-4 rounded-full"
        >
          <div className="flex items-center gap-2">
            <FaWhatsapp size={24} />
            <span className="font-medium text-[18px]">
              Join Our WhatsApp Group
            </span>
          </div>
        </Link>
      </div>

      <footer className="text-center">
        Stay updated with the latest announcements and connect with fellow
        delegates
      </footer>
    </div>
  );
}

export default Contact;
