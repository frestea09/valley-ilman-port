import { dataLandingPage } from "@/common/data/dataPage";

export const SectionWelcome = () => {
  return (
    <div className="hidden lg:flex flex-col lg:flex-row  justify-between h-[500px] w-full lg:pl-40">
      <div className="flex lg:py-16 lg:pr-1 flex-col gap-5">
        <h2 className="text-6xl font-bold line-clamp-2 leading-snug ">
          Enjoy Tech-Enhanced{" "}
          <span className="text-[#910A67]">Comfortable Stays</span>
        </h2>
        <p className="text-lg lg:pr-32 text-gray-400">
          {dataLandingPage.secationWelcome.descriptionLabel}
        </p>
      </div>
      <div className="bg-indigo-50 w-[1000px] h-[473px]">
        <img
          src={
            "https://source.unsplash.com/white-and-brown-lounge-chairs-beside-swimming-pool-during-daytime-J9O3WcJ5N74"
          }
          alt="hotel"
          className="object-cover"
        />
      </div>
    </div>
  );
};
