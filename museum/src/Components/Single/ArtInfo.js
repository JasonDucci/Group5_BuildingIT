import React from "react";
import FlexArtItems from "../FlexArtItems";
import { FaShareAlt } from "react-icons/fa";
import Rating from "../Stars";
import { MdOutlinePeopleAlt } from "react-icons/md";

function ArtInfo({ art, setModalOpen }) {
  return (
    <div className="w-full xl:h-screen relative text-white">
      <img
        src={art?.image ? art?.image : "/images/user.png"}
        alt={art?.name}
        className="w-full xl:inline-block h-full object-cover"
      />
      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0 ">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <img
              src={art?.titleImage ? art?.titleImage : "/images/user.png"}
              alt={art?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10">
              {/* Title art */}
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {art?.name}
              </h1>
              {/* Flex items*/}
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <FlexArtItems art={art && art} />
                <div className="flex items-center gap-2">
                  <MdOutlinePeopleAlt className="text-subMain w-3 h-3" />
                  <span className="text-sm font-medium">{art?.artist}</span>
                </div>
              </div>
              {/* rating */}
              <div className="flex  text-lg gap-2 text-star">
                <Rating value={art?.rate} />
              </div>
              {/* art description */}
              <p className="text-text text-sm leading-7">{art?.desc}</p>
              {/* <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                //share social 
                <div className="col-span-1 flex-colo border-r border-border">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20"
                  >
                    <FaShareAlt />
                  </button>
                </div>
                //artist 
                <div className="col-span-2 flex-colo font-medium text-sm">
                  <p>
                    Artist: <span className="ml-2 truncate">{art?.artist}</span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtInfo;
