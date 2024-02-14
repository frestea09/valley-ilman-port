import { AiOutlineSafety } from "react-icons/ai";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { MdOutlineTouchApp } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";

export const GuarantedSection = () => {
  return (
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
              lamps and QR door locks, accessible via our B-Pad and your phone.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <AiOutlineSafety className="w-1/2" color="#910A67" size={70} />
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-slate-700">Safe & Clean Stay</h3>
            <p className="text-sm text-xs">
              Your comfort and safety are our top priorities; expect impeccable
              hygiene standards.
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
              Our hosts are just a chat away through our app's DM feature. Reach
              out anytime for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
