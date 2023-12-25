import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FlexArtItems from "../FlexArtItems";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Loader from "../Notifications/Loader";
import { RiArtboardLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { IfArtLiked, LikeArt } from "../../Context/Functionalities";

const Swipper = ({ sameClass, arts }) => {
  const { isLoading } = useSelector((state) => state.userLikeArt);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  //if liked function
  const isLiked = (art) => {
    return IfArtLiked(art);
  };

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      loop={true}
      speed={1000}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className={sameClass}
    >
      {arts?.slice(0, 7).map((art, index) => (
        <SwiperSlide key={index} className="relative rounded overflow-hidden">
          <img
            src={art?.image ? art.image : "/images/user.png"}
            alt={art?.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
            <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
              {art?.name}
            </h1>
            <div className="flex gap-5 items-center text-dryGray">
              <FlexArtItems art={art} />
            </div>
            <div className="flex gap-5 items-center">
              <Link
                to={`/art/${art?._id}`}
                className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
              >
                Discover
              </Link>
              <button
                onClick={() => LikeArt(art, dispatch, userInfo)}
                disabled={isLiked(art) || isLoading}
                className={`bg-white
              ${isLiked(art) ? "text-subMain" : "text-white"}
               hover:text-subMain transitions px-4 py-3 rounded text-sm bg-opacity-30`}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

function Banner({ arts, isLoading }) {
  const sameClass = "w-full flex-colo xl:h-96 bg-dry lg:h-64 h-48";
  return (
    <div className="relative w-full ">
      {isLoading ? (
        <div className={sameClass}>
          <Loader />
        </div>
      ) : arts?.length > 0 ? (
        <Swipper sameClass={sameClass} arts={arts} />
      ) : (
        <div className={sameClass}>
          <div className="flex-colo w-24 h-24 p-5 mb-4 rounded-full bg-dry text-subMain text-4xl">
            <RiArtboardLine />
          </div>
          <p className="text-border text-sm">No art avaiable</p>
        </div>
      )}
    </div>
  );
}

export default Banner;
