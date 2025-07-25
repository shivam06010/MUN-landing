"use client";

import Image from "next/image";
import Link from "next/link";

function Header() {
  // fixed top-0 z-50 left-0
  return (
    <div className="bg-white border-b-1 border-stone-200 fixed top-0 z-50 left-0  w-full">
      <header className="flex justify-between items-center max-w-[1200px] mx-auto h-[70px]">
        <Link href="/" className="flex gap-4 items-center cursor-pointer">
          <img
            src="/images/logo.jpeg"
            alt="logo"
            width="50px"
            className="rounded-full"
          />
          <span className="font-semibold">IIT (BHU) Varanasi MUN 2025</span>
        </Link>

        <nav>
          <ul className="flex gap-10 items-center font-medium text-[16px]">
            <li className="hover:text-[#306feb]">
              <Link href="/#about">About</Link>
            </li>
            <li className="hover:text-[#306feb]">
              <Link href="/#committees">Committees</Link>
            </li>
            <li className="hover:text-[#306feb]">
              <Link href="/#team">Team</Link>
            </li>
            <li className="hover:text-[#306feb]">
              <Link href="/#contact">Contact</Link>
            </li>
            <li className=" text-white">
              <Link
                href="/registeration"
                className="px-4 py-2 rounded-full bg-linear-to-br from-[#0425ba] to-[#0531f5] transition-all hover:scale-105"
              >
                Register Now
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
