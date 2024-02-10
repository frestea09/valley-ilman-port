import Navbar from "@/components/organisms";
import { NavbarMobile } from "@/components/organisms/NavbarMobile/NavbarMobile";
import { SectionWelcome } from "@/components/organisms/SectionWelcome/SectionWelcome";
import { SectionWelcomeMobile } from "@/components/organisms/SectionWelcome/SectionWelcomeMobile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overscroll-none">
      <Navbar />
      <NavbarMobile />
      <SectionWelcome />
      <SectionWelcomeMobile />
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
    </div>
  );
}
