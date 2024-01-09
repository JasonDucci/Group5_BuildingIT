import React from "react";
import { FiUser } from "react-icons/fi";
import { RiCompassDiscoverLine } from "react-icons/ri";

function Promos() {
  return (
    <div className="my-20 py-10 mdLpx-20 px-8 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3x1 text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Discover Our Famous Masterpieces <br /> Enjoy free access
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
          At Emree, we believe in the power of education and the transformative influence of art. Join us in unraveling the tapestry of human history, where every artifact tells a tale, and every brushstroke echoes an artist's vision. Whether you're a seasoned scholar or a curious novice, Emree welcomes you to embark on an immersive experience where the boundaries of time dissolve, and the beauty of the human spirit unfolds.
          </p>
          <div className="flex gap-4 md:text-lg text-sm ">
            <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
              <RiCompassDiscoverLine />
              Discover Now
            </div>
            <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
              <FiUser /> Quality experience
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/promos.jpg"
            alt="Promos img"
            className="w-full object-contain mb-4"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Promos;
