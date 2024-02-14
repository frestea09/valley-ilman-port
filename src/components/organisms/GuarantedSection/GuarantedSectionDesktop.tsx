import { AiOutlineSafety } from "react-icons/ai";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { MdOutlineTouchApp } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";

export const GuarantedSectionDesktop = () => {
  return (
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
            <h3 className="font-semibold text-slate-700">Safe & Clean Stay</h3>
            <p className="text-sm text-xs">
              Your comfort and safety are our top priorities; expect impeccable
              hygiene standards.
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
              Our hosts are just a chat away through our app's DM feature. Reach
              out anytime for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
