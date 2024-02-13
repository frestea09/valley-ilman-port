import { dataLandingPage } from "@/common/data/dataPage";

export const SectionWelcomeMobile = () => {
  return (
    <div className="flex lg:hidden flex-col gap-7">
      <div className=" bg-indigo-50">
        <img
          src={
            "https://source.unsplash.com/white-and-brown-lounge-chairs-beside-swimming-pool-during-daytime-J9O3WcJ5N74"
          }
          alt="hotel"
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="flex flex-col px-4 py-3 gap-7">
        <h2 className=" font-bold line-clamp-2 leading-snug text-2xl ">
          Enjoy Tech-Enhanced{" "}
          <span className="text-[#910A67]">Comfortable Stays</span>
        </h2>
        <p className="text-lg lg:pr-32 text-gray-400">
          {dataLandingPage.secationWelcome.descriptionLabel}
        </p>
      </div>
    </div>
  );
};
