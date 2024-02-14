export const DiscoverySectionMobile = () => {
  return (
    <div className="flex lg:hidden flex-col py-14 justify-center items-center gap-8 ">
      <div>
        <h2 className="font-semibold md:heading-5 lg:heading-2 text-left md:text-center">
          Discover the Ideal <span className="text-[#910A67]">Solution</span>{" "}
          for All Your Needs.
        </h2>
      </div>
      <div className="px-6 flex-col flex gap-2">
        <h3 className="text-slate-400">POD</h3>
        <img
          src="https://source.unsplash.com/white-mattresses-with-blanket-RDIa_qFpWHc"
          className="object-cover w-[400px] h-[300px] rounded-md"
          alt="image-pod"
        />
        <div className="flex flex-col gap-4 py-4">
          <h3 className="font-semibold text-xl">
            <span className="text-[#910A67]">Get quality</span> sleep easily
            accessible.
          </h3>
          <p>
            As one of Indonesia &apos s pioneering high-tech capsule hotels,
            Bobopod offers an unparalleled sleeping experience. Discover
            ultimate comfort and customize your pod to your preferences for a
            perfect night &apos s rest
          </p>
        </div>
      </div>
      <div className="px-6 flex-col flex gap-2">
        <h3 className="text-slate-400">Cabin</h3>
        <img
          src="https://source.unsplash.com/brown-and-grey-wooden-cabin-surrounded-by-trees-9-qFzV9a2Zc"
          className="object-cover w-[400px] h-[300px] rounded-md"
          alt="image-pod"
        />
        <div className="flex flex-col gap-4 py-4">
          <h3 className="font-semibold text-xl">
            <span className="text-[#910A67]">Experience</span> the rejuvenating
            power of nature &apos s touch.
          </h3>
          <p>
            Leave behind the busy city life and immerse yourself in the exotic
            beauty of Indonesia &apos s natural wonders at Bobocabin. Enjoy the
            stunning scenery from the comfort of your cozy cabin
          </p>
        </div>
      </div>
      <div className="px-6 flex-col flex gap-2">
        <h3 className="text-slate-400">Co-Living</h3>
        <img
          src="https://source.unsplash.com/white-and-brown-wooden-table-and-chairs-Wzrf_P2YVNU"
          className="object-cover w-[400px] h-[300px] rounded-md"
          alt="image-pod"
        />
        <div className="flex flex-col gap-4 py-4">
          <h3 className="font-semibold text-xl">
            {" "}
            <span className="text-[#910A67]">Your</span> second home
          </h3>
          <p>
            Elevating the co-living experience, Boboliving integrates
            cutting-edge technology for unparalleled convenience. Ensuring you
            feel right at home
          </p>
        </div>
      </div>
    </div>
  );
};
