import { FaRegCheckCircle } from "react-icons/fa";

function Registeration() {
  return (
    <div className="grid grid-cols-2 max-w-[1200px] gap-8 mx-auto pt-30">
      <div className="px-6">
        <h2 className="text-[36px] font-semibold mb-6">
          Register for <span className="text-[#306feb]">MUN 2025</span>
        </h2>
        <p className="text-[20px] text-[#4B5563] mb-8">
          Join us for an exceptional Model United Nations experience. Fill out
          the form to secure your spot at this prestigious diplomatic
          simulation.
        </p>

        <ul className="space-y-7">
          <li className="flex gap-3">
            <FaRegCheckCircle className="self-start mt-1" size={25} />
            <div>
              <h3 className="text-[18px] font-medium">
                Professional Experience
              </h3>
              <p className="text-[#757575]">
                Gain real-world diplomatic skills and international relations
                knowledge.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <FaRegCheckCircle className="self-start mt-1" size={25} />
            <div>
              <h3 className="text-[18px] font-medium">
                Networking Opportunities
              </h3>
              <p className="text-[#757575]">
                Connect with like-minded students from various institutions.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <FaRegCheckCircle className="self-start mt-1" size={25} />
            <div>
              <h3 className="text-[18px] font-medium">
                Certificate of Participation
              </h3>
              <p className="text-[#757575]">
                Receive official recognition for your diplomatic engagement.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <form className="px-10 bg-white py-10 rounded-[15px] space-y-6">
        <h2 className="text-[24px] font-semibold mb-8">Registeration Form</h2>
        <div className="flex flex-col gap-1">
          <label className="mb-1">Full Name</label>
          <input
            required
            type="text"
            placeholder="Enter your full name"
            className="px-2 py-3 border-1  border-stone-300 text-[#797979] rounded-[10px]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="mb-1">Email Address</label>
          <input
            required
            type="email"
            placeholder="your.email@example.com"
            className="px-2 py-3 border-1 text-[#797979] border-stone-300 rounded-[10px]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="mb-1">Phone Number</label>
          <input
            required
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="px-2 py-3 border-1 text-[#797979] border-stone-300 rounded-[10px]"
            placeholder="+918888888888"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="mb-1">College/Institution</label>
          <input
            required
            type="email"
            className="px-2 py-3 border-1 text-[#797979]  border-stone-300 rounded-[10px]"
            placeholder="Your college or institution name"
          />
        </div>
        <button className="bg-blue-600 hover:scale-105 hover:bg-blue-700 transition-all px-4 py-2 rounded-[10px] mt-5  text-white">
          Register for MUN 2025
        </button>
      </form>
    </div>
  );
}

export default Registeration;
