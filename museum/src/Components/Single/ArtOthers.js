import React from "react";
import { FaImages } from "react-icons/fa";
import Titles from "../Titles";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { UserData } from "../../Data/ArtData";

function ArtOthers() {
  return (
    <div className="my-12">
      <Titles title="Other Image" Icon={FaImages} />
      <div className="mt-10">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          module={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerview: 1,
              spaceBetween: 10,
            },
            400: {
              slidesPerview: 2,
            },
            768: {
              slidesPerview: 3,
            },
            1024: {
              slidesPerview: 4,
            },
            1280: {
              slidesPerview: 5,
              slidesBetween: 30,
            },
          }}
        >
          {UserData.map((user, i) => (
            <SwiperSlide key={i}>
              <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800">
                <img
                  src={`/images/${user.image}`}
                  alt={user.name}
                  className="w-full h-64 object-cover rounded mb-2"
                ></img>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ArtOthers;
