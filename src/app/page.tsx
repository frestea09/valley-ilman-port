import Navbar from "@/components/organisms";
import { NavbarMobile } from "@/components/organisms/NavbarMobile/NavbarMobile";

export default function Home() {
  return (
    <div className="overscroll-none">
      <Navbar />
      <NavbarMobile />

      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
      <div className="h-[300px] bg-orange-200 w-full">hello</div>
    </div>
  );
}
