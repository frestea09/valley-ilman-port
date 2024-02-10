"use client";
import { dataLandingPage } from "@/common/data/dataPage";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { NavbarMenuItem } from "../Navbar/NabarMenuItem";
import { useState } from "react";

export const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="lg:hidden sticky top-0 left-0 z-30 w-full">
      <div className="flex  bg-white h-20 shadow-md items-center justify-between px-6">
        <div className="container mx-auto">
          <nav className=" flex justify-between items-center py-2 px-3">
            <Link
              href="index.html"
              className="logo text-xl text-[#910A67] gap-2 font-semibold mr-6 uppercase"
            >
              {dataLandingPage.logoHotel}
            </Link>
            <IoMenu
              size={35}
              color="#910A67"
              onClick={() => {
                setIsMenuOpen((prevState) => !prevState);
              }}
            />
          </nav>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        }  flex-col justify-start h-screen bg-white px-8 py-4 md:h-96 gap-11`}
      >
        <ul className="nav flex flex-col justify-start gap-9 text-lg">
          {dataLandingPage.menuNavbar.map((item) => (
            <NavbarMenuItem
              key={item.id}
              id={item.id}
              labelMenu={item.labelMenu}
              linkUrl={item.linkUrl}
            />
          ))}
        </ul>
        <div className="flex flex-col gap-9">
          <button className="text-lg border-[#720455] border px-2 py-1 rounded-md">
            {dataLandingPage.buttonLoginLabel}
          </button>
          <button className="text-lg px-4 py-3 bg-[#910A67] hover:bg-[#720455] rounded-md text-amber-50">
            {dataLandingPage.buttonRegisterLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
