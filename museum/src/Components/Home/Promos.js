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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
