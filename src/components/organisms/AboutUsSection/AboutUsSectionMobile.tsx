import { useState } from "react";

export const AboutUsSectionMobile = () => {
  const [toggleContect, setToggleContent] = useState<boolean>(false);
  return (
    <div className="flex lg:hidden flex-col gap-5 px-6 max-h-[1900px]">
      <h3 className="font-semibold text-xl">
        Discover Hotel : Dive deeper into our offerings!
      </h3>
      <div>
        <p>
          Experience top-notch sleep quality at Pod, where affordability meets
          luxury. Our capsule hotel prioritizes privacy, comfort, and
          cutting-edge amenities, making it the ultimate choice for travelers
          seeking accommodation in bustling Indonesian cities. Each pod features
          a door for added privacy, ensuring a unique capsule hotel experience
          like never before.
        </p>
      </div>
      {toggleContect && (
        <div className="flex flex-col gap-7 py-2">
          <p>
            Choose between our sky pods, offering a dreamy escape high above the
            ground, or our cozy earth pods for a grounded stay. Customize your
            pod effortlessly using the B-pad or Hotel application to tailor your
            surroundings to your liking.
          </p>
          <p>
            Don't forget your camera! Pod boasts Instagram-worthy spots to
            capture colorful memories throughout your stay. Ready to experience
            it for yourself? Pod awaits you in numerous cities across Indonesia.
            See you soon, Bob’s Besties!
          </p>
          <p>
            Elevate your camping experience with high-tech luxury at Cabin.
            Amidst the vibrant city life, sometimes all you need is a serene
            retreat. At Cabin, immerse yourself in nature while enjoying the
            comforts of our high-tech cabins. Experience signature features like
            mood lamps, sleep meditation sounds, and the innovative Smart
            Window, offering scenic views or maximum privacy at your fingertips.
          </p>
          <p>
            Indulge in true glamping with additional amenities such as board
            games, a movie projector, and even a campfire with a BBQ set—all
            available through our 24-hour host service. Ready for a holiday?
            Book your cabin now at Cabin, available in breathtaking natural
            destinations across Indonesia.
          </p>
          <p className="font-semibold">
            But wait, there's more! Explore further with Co-Living and Van!
          </p>
          <p>
            Longing for an extended stay? Co-Living offers a co-living space
            perfect for those seeking a home away from home. Immerse yourself in
            a true co-living lifestyle, with shared facilities fostering
            connections with fellow residents. Enjoy a fully equipped kitchen
            and communal areas for relaxation and socializing.
          </p>
          <p>
            For the adventurous souls, embark on a new journey with Van—a
            state-of-the-art camper van, equipped with Hotel's signature
            amenities. Complete with a tent atop the van and sleeping space for
            four, Van lets you explore Indonesia's natural wonders in comfort.
            With kitchen sets and more onboard, everything you need for an
            unforgettable adventure awaits in our high-tech campervan.
          </p>
        </div>
      )}

      <button
        className="text-[#910A67] hover:text-white hover:bg-[#910A67] font-semibold py-3"
        onClick={() => setToggleContent((prevState) => !prevState)}
      >
        {toggleContect ? "Read More" : "Hide Detail"}
      </button>
    </div>
  );
};
