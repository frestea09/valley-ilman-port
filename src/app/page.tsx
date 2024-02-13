import Navbar from "@/components/organisms";
import { DiscoverySection } from "@/components/organisms/DiscoverySection/DiscoverySection";
import { DiscoverySectionMobile } from "@/components/organisms/DiscoverySection/DiscoverySectionMobile";
import { InputFormCheckIn } from "@/components/organisms/InputFormCheckIn/InputFormCheckIn";
import { InputFormCheckInMobile } from "@/components/organisms/InputFormCheckIn/InputFormCheckInMobile";
import { NavbarMobile } from "@/components/organisms/NavbarMobile/NavbarMobile";
import { SectionWelcome } from "@/components/organisms/SectionWelcome/SectionWelcome";
import { SectionWelcomeMobile } from "@/components/organisms/SectionWelcome/SectionWelcomeMobile";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { Ri24HoursLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="overscroll-none ">
      <Navbar />
      <NavbarMobile />
      <SectionWelcome />
      <SectionWelcomeMobile />
      <InputFormCheckInMobile />
      <InputFormCheckIn />
      <DiscoverySectionMobile />

      <div className="hidden lg:flex h-[300px] w-full"></div>
      <DiscoverySection />
      <div className="flex lg:hidden flex-col gap-7 px-5 py-5">
        <div>
          <h3 className="text-xl font-semibold">
            <span className="text-[#910A67]">Your Happiness</span> Guaranteed
          </h3>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-row gap-3">
            <MdOutlineTouchApp className="w-1/2" color="#910A67" size={70} />
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-700">Seamless Process</h3>
              <p className="text-sm text-xs">
                Enjoy a hassle-free experience from booking to check-in, all in
                one easy-to-use app.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8 px-5">
            <IoTabletLandscapeOutline
              className="w-1/2"
              color="#910A67"
              size={70}
            />
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-700">
                IoT Digital Room Control
              </h3>
              <p className="text-sm text-xs">
                Personalize your room using our high-tech features such as mood
                lamps and QR door locks, accessible via our B-Pad and your
                phone.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <AiOutlineSafety className="w-1/2" color="#910A67" size={70} />
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-700">
                Safe & Clean Stay
              </h3>
              <p className="text-sm text-xs">
                Your comfort and safety are our top priorities; expect
                impeccable hygiene standards.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Ri24HoursLine className="w-1/2" color="#910A67" size={70} />
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-700">
                24-hour Host Support
              </h3>
              <p className="text-sm text-xs">
                Our hosts are just a chat away through our app's DM feature.
                Reach out anytime for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col gap-7 px-5 justify-center items-center bg-[#faedf6] py-9">
        <div className="flex flex-col  align-middle items-center gap-4 ">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#910A67]">Your Happiness</span> Guaranteed
          </h3>
          <p className="text-slate-500">
            <span className="text-[#910A67]">Learn</span> more about Hotel and
            what matters most to us.
          </p>
        </div>
        <div className="flex flex-row justify-between py-10 px-7 gap-5">
          <div className="flex flex-col gap-3 bg-white rounded-md px-7 py-7">
            <div className="flex justify-center w-full">
              <MdOutlineTouchApp className="w-1/2" color="#910A67" size={70} />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-700">Seamless Process</h3>
              <p className="text-sm text-xs">
                Enjoy a hassle-free experience from booking to check-in, all in
                one easy-to-use app.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-white rounded-md px-7 py-5">
            <div className="flex justify-center w-full">
              <IoTabletLandscapeOutline
                className="w-1/2"
                color="#910A67"
                size={70}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-700">
                IoT Digital Room Control
              </h3>
              <p className="text-sm text-xs">
                Personalize your room using our high-tech features such as mood
                lamps and QR door locks.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-white rounded-md px-7 py-5">
            <div className="flex justify-center w-full">
              <AiOutlineSafety className="w-1/2" color="#910A67" size={70} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-700">
                Safe & Clean Stay
              </h3>
              <p className="text-sm text-xs">
                Your comfort and safety are our top priorities; expect
                impeccable hygiene standards.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-white rounded-md px-7 py-5">
            <div className="flex justify-center w-full">
              <Ri24HoursLine className="w-1/2" color="#910A67" size={70} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-700">
                24-hour Host Support
              </h3>
              <p className="text-sm text-xs">
                Our hosts are just a chat away through our app's DM feature.
                Reach out anytime for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
    </div>
  );
}
