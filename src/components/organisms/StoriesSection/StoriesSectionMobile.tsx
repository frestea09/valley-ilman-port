export const StoreisSectionMobile = () => {
  return (
    <div className="flex lg:hidden flex-col w-full px-5 py-16 gap-3">
      <h3 className="font-semibold text-xl">Stories from Besties</h3>
      <div className="flex flex-col justify-between gap-3 w-full h-[500px] bg-red-100 shadow-lg rounded-md px-2 py-3">
        <img
          src="https://source.unsplash.com/portrait-of-happy-woman-sitting-on-old-and-dirty-window-sill-reading-a-book-DQNmFRRwx18"
          className="object-cover w-[400px] h-[300px] rounded-md"
          alt="image-pod"
        />
        <p className="font-light">
          Travel experience with Hotel was exceptional! From the seamless
          bookings to the cozy accommodations, I was thoroughly impressed.
          Highly recommended for anyone looking for a stress-free getaway.
        </p>
        <p className="font-semibold">Rose</p>
      </div>
    </div>
  );
};
