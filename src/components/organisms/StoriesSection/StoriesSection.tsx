export const StoriesSection = () => {
  return (
    <div className="hidden lg:flex flex-col w-full px-44 py-11 gap-3 justify-center items-center">
      <h3 className="font-semibold text-3xl">Stories from Besties</h3>
      <div className="flex flex-row justify-between gap-3 w-full h-[500px]   rounded-md px-2 py-3 gap-6">
        <img
          src="https://source.unsplash.com/portrait-of-happy-woman-sitting-on-old-and-dirty-window-sill-reading-a-book-DQNmFRRwx18"
          className="object-cover w-1/2 h-[400px] rounded-md"
          alt="image-pod"
        />
        <div className="flex flex-col w-1/2 justify-between pb-20">
          <p className="font-medium text-xl">
            Travel experience with Hotel was exceptional! From the seamless
            bookings to the cozy accommodations, I was thoroughly impressed.
            Highly recommended for anyone looking for a stress-free getaway.
          </p>
          <p className="font-semibold text-xl">Rose</p>
        </div>
      </div>
    </div>
  );
};
