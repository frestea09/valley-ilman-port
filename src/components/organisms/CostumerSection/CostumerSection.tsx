import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuYoutube } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";

export const CostumerSection = () => {
  return (
    <div className="px-6 py-28 flex flex-col lg:flex-row lg:gap-4 items-center align-middle">
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col gap-3  justify-center align-middle items-center  h-[300px]">
          <h3 className="text-xl">Home</h3>
          <div className="flex flex-col items-center justify-start align-middle">
            <p className="font-bold text-5xl uppercase text-[#910A67]">hotel</p>
            <p className="text-sm text-slate-500">Get More, Pay Less!</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center align-middle">
          <div>
            <h3 className="text-sm font-semibold">
              Consumer Complaint Service
            </h3>
          </div>
          <div>
            <div className="flex flex-row px-5 py-4 gap-7 items-center align-middle">
              <IoChatboxEllipsesOutline
                className="shadow-sm"
                size={40}
                color="#910A67"
              />
              <div className="flex flex-col text-xs">
                <p>Whatsapp</p>
                <p>+61123123</p>
              </div>
            </div>
            <div className="flex flex-row px-5 py-4 gap-7 items-center align-middle">
              <MdOutlineEmail className="shadow-sm" size={40} color="#910A67" />
              <div className="flex flex-col text-xs">
                <p>Email</p>
                <p>help@hotel.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-7 py-5">
            <Link href={"/"} className="text-slate-500 text-sm">
              <FaInstagram size={30} color="#910A67" />{" "}
            </Link>
            <Link href={"/"} className="text-slate-500 text-sm">
              <FaTiktok size={30} color="#910A67" />
            </Link>
            <Link href={"/"} className="text-slate-500 text-sm">
              <LuYoutube size={30} color="#910A67" />
            </Link>
            <Link href={"/"} className="text-slate-500 text-sm">
              {" "}
              <RiTwitterXLine size={30} color="#910A67" />
            </Link>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-2 w-full justify-center items-center align-middle py-5">
        <div className="flex flex-col gap-4 justify-start align-middle items-center min-h-[150px]">
          <h3 className="font-semibold text-slate-800">Company</h3>
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="text-slate-500 text-sm">
              Our Prfile
            </Link>
            <Link href={"/"} className="text-slate-500 text-sm">
              Career
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start align-middle items-center min-h-[150px]">
          <h3 className="font-semibold text-slate-800">Product</h3>
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="text-slate-500 text-sm">
              Cabin
            </Link>
            <Link href={"/"} className="text-slate-500 text-sm">
              POD
            </Link>
            <Link href={"/"} className="text-slate-500 text-sm">
              Co-living
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start align-middle items-center min-h-[150px]">
          <h3 className="font-semibold text-slate-800">Support</h3>
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="text-slate-500 text-sm">
              Help Center
            </Link>
            <Link href={"/"} className="text-slate-500 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start align-middle items-center min-h-[150px]">
          <h3 className="font-semibold text-slate-800">Business</h3>
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="text-slate-500 text-sm">
              Patnership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
