import React, { useEffect } from "react";
import SideBar from "../SideBar";
import Table from "../../../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllArtsAction,
  deleteArtAction,
  getAllArtsAction,
} from "../../../Redux/Actions/ArtsActions";
import toast from "react-hot-toast";
import Loader from "../../../Components/Notifications/Loader";
import { Empty } from "../../../Components/Notifications/Empty";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

function ArtsList() {
  const dispatch = useDispatch();
  const sameClass =
    "text-white p-2 rounded font-semibold border-2 border-subMain hover:bg-subMain";
  //get all arts
  const { isLoading, isError, arts, pages, page } = useSelector(
    (state) => state.getAllArts
  );
  //delete art
  const { isLoading: deleteLoading, isError: deleteError } = useSelector(
    (state) => state.deleteArt
  );
  //delete all arts
  const { isLoading: allLoading, isError: allError } = useSelector(
    (state) => state.deleteAllArts
  );
  //handler
  const deleteArtHandler = (id) => {
    window.confirm("Do you want to delete this art?") &&
      dispatch(deleteArtAction(id));
  };
  const deleteAllArtsHandler = () => {
    window.confirm("DO you want to delete all arts?") &&
      dispatch(deleteAllArtsAction());
  };

  //useEffect
  useEffect(() => {
    dispatch(getAllArtsAction({}));
    //if error
    if (isError || deleteError || allError) {
      toast.error(isError || deleteError || allError);
    }
  }, [dispatch, isError, deleteError, allError]);

  //pagination previous and next
  const nextPage = () => {
    dispatch(
      getAllArtsAction({
        pageNumber: page + 1,
      })
    );
  };
  const prevPage = () => {
    dispatch(
      getAllArtsAction({
        pageNumber: page - 1,
      })
    );
  };

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Arts Lists</h2>
          {arts?.length > 0 && (
            <button
              disabled={allLoading}
              onClick={deleteAllArtsHandler}
              className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded "
            >
              {allLoading ? "Loading..." : "Delete All"}
            </button>
          )}
        </div>
        {isLoading || deleteLoading ? (
          <Loader />
        ) : arts?.length > 0 ? (
          <>
            <Table
              data={arts}
              admin={true}
              onDeleteHandler={deleteArtHandler}
            />
            {/*Loading more list*/}
            <div className="w-full flex-rows gap-5 my-5">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className={sameClass}
              >
                <TbPlayerTrackPrev className="text-xl" />
              </button>
              <button
                onClick={nextPage}
                disabled={page === pages}
                className={sameClass}
              >
                <TbPlayerTrackNext className="text-xl" />
              </button>
            </div>
          </>
        ) : (
          <Empty message="No arts list found" />
        )}
      </div>
    </SideBar>
  );
}

export default ArtsList;
