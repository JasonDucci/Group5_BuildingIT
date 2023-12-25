import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Art from "../Art";
import Loader from "../Notifications/Loader";
import { Empty } from "../Notifications/Empty";

function PopularArts({ isLoading, arts }) {
  return (
    <div className="my-16">
      <Titles title="Popular Arts" Icon={BsCollectionFill} />
      {isLoading ? (
        <Loader />
      ) : arts?.length > 0 ? (
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {arts.slice(0, 8).map((art, index) => (
            <Art key={index} art={art} />
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <Empty message="No art available" />
        </div>
      )}
    </div>
  );
}

export default PopularArts;
