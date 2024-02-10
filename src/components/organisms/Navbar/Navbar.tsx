import { dataLandingPage } from "@/common/data/dataPage";
import Link from "next/link";
import { NavbarMenuItem } from "./NabarMenuItem";

export const Navbar = () => {
  return (
    <div className="hidden lg:flex sticky top-0 left-0 bg-white h-20 shadow-md  items-center justify-between px-6">
      <div className="container mx-auto">
        <nav className=" flex justify-between items-center py-4 px-7">
          <Link
            href="index.html"
            className="logo text-3xl text-[#910A67] gap-2 font-semibold mr-6 uppercase"
          >
            {dataLandingPage.logoHotel}
          </Link>
          <ul className="nav flex justify-end gap-9 text-lg">
            {dataLandingPage.menuNavbar.map((item) => (
              <NavbarMenuItem
                key={item.id}
                id={item.id}
                labelMenu={item.labelMenu}
                linkUrl={item.linkUrl}
              />
            ))}
          </ul>
          <div className="flex flex-row gap-9">
            <button className="text-lg">
              {dataLandingPage.buttonLoginLabel}
            </button>
            <button className="text-lg px-4 py-3 bg-[#910A67] hover:bg-[#720455] rounded-md text-amber-50">
              {dataLandingPage.buttonRegisterLabel}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
