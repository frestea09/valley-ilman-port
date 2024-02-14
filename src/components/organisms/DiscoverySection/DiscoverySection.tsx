export const DiscoverySection = () => {
  return (
    <div className="hidden lg:flex flex-col py-14 px-60 justify-center items-center  gap-8 ">
      <div className="flex flex-col gap-5 items-center align-middle">
        <h2 className="font-semibold md:heading-5 lg:heading-2 text-left md:text-center text-4xl">
          Discover the Ideal <span className="text-[#910A67]">Solution</span>{" "}
          for All Your Needs
        </h2>
        <p className="text-center">
          Whether you &apos re seeking a cozy urban retreat or yearning to
          explore Indonesia &apos s natural wonders, Bobobox promises to
          accompany you on your adventure with unparalleled comfort, wherever
          you may be.
        </p>
      </div>
      <div className=" flex-row flex justify-start gap-6 pt-28">
        <div>
          <p className="text-slate-400 ">POD</p>
          <img
            src="https://source.unsplash.com/white-mattresses-with-blanket-RDIa_qFpWHc"
            className="object-cover w-[400px] h-[300px] rounded-md"
            alt="image-pod"
          />
        </div>
        <div className="flex flex-col gap-4 py-4 w-1/2">
          <h3 className="font-semibold text-3xl">
            <span className="text-[#910A67]">Experience</span> the rejuvenating
            power of nature &apos s touch.
          </h3>
          <p className="font-light text-slate-400">
            Leave behind the busy city life and immerse yourself in the exotic
            beauty of Indonesi a&apos s natural wonders at Bobocabin. Enjoy the
            stunning scenery from the comfort of your cozy cabin
          </p>
        </div>
      </div>
      <div className=" flex-row flex justify-end gap-6 pt-12">
        <div className="flex flex-col gap-4 py-4 w-1/2">
          <h3 className="font-semibold text-3xl">
            <span className="text-[#910A67]">Get quality</span> sleep easily
            accessible.
          </h3>
          <p className="font-light text-slate-400">
            As one of Indonesia &apos s pioneering high-tech capsule hotels,
            Bobopod offers an unparalleled sleeping experience. Discover
            ultimate comfort and customize your pod to your preferences for a
            perfect night &apos s rest
          </p>
        </div>
        <div>
          <p className="text-slate-400 ">Cabin</p>
          <img
            src="https://source.unsplash.com/brown-and-grey-wooden-cabin-surrounded-by-trees-9-qFzV9a2Zc"
            className="object-cover w-[400px] h-[300px] rounded-md"
            alt="image-pod"
          />
        </div>
      </div>
      <div className=" flex-row flex justify-start gap-6 pt-12">
        <div>
          <p className="text-slate-400 ">Co-Living</p>
          <img
            src="https://source.unsplash.com/white-and-brown-wooden-table-and-chairs-Wzrf_P2YVNU"
            className="object-cover w-[400px] h-[300px] rounded-md"
            alt="image-pod"
          />
        </div>
        <div className="flex flex-col gap-4 py-4 w-1/2">
          <h3 className="font-semibold text-3xl">
            <span className="text-[#910A67]">Your</span> second home
          </h3>
          <p className="font-light text-slate-400">
            Elevating the co-living experience, Boboliving integrates
            cutting-edge technology for unparalleled convenience. Ensuring you
            feel right at home
          </p>
        </div>
      </div>
    </div>
  );
};
