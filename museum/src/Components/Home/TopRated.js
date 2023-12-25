import React from "react";
import Titles from "./../Titles";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Stars";
import Loader from "../Notifications/Loader";
import { Empty } from "../Notifications/Empty";
import { useDispatch, useSelector } from "react-redux";
import { IfArtLiked, LikeArt } from "../../Context/Functionalities";

const SwiperTop = ({ arts }) => {
  const { isLoading } = useSelector((state) => state.userLikeArt);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  //if liked function
  const isLiked = (art) => {
    return IfArtLiked(art);
  };

  return (
    <Swiper slidesPerView={4} spaceBetween={40} autoplay={true} speed={1000}>
      {arts?.map((art, index) => (
        <SwiperSlide key={index}>
          <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden">
            <img
              src={art?.titleImage ? art.titleImage : "/images/user.png"}
              alt={art?.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
              <button
                onClick={() => LikeArt(art, dispatch, userInfo)}
                disabled={isLiked(art) || isLoading}
                className={`w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full
              ${isLiked(art) ? "bg-subMain" : "bg-white bg-opacity-30"}
              text-white`}
              >
                <FaHeart />
              </button>
              <Link
                className="font-semibold text-xl trancuteed line-clamp-2"
                to={`/art/${art?._id}`}
              >
                {art?.name}
              </Link>
              <div className="flex gap-2 text-star">
                <Rating value={art?.rate} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

function TopRated({ arts, isLoading }) {
  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        {isLoading ? (
          <Loader />
        ) : arts.length > 0 ? (
          <SwiperTop arts={arts} />
        ) : (
          <Empty message="No art available" />
        )}
      </div>
    </div>
  );
}

export default TopRated;
