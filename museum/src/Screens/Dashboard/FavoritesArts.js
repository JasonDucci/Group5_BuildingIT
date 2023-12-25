import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Table from "../../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFavoriteArtsAction,
  getFavoriteArtsAction,
} from "../../Redux/Actions/userActions";
import toast from "react-hot-toast";
import Loader from "../../Components/Notifications/Loader";
import { Empty } from "../../Components/Notifications/Empty";

function FavoritesArts() {
  const dispatch = useDispatch();

  const { isLoading, isError, likedArts } = useSelector(
    (state) => state.userGetFavoriteArts
  );
  //delete all arts
  const {
    isLoading: deleteLoading,
    isError: deleteError,
    isSuccess,
  } = useSelector((state) => state.userDeleteFavoriteArts);

  //delete arts handler
  const deleteArtsHandler = () => {
    window.confirm("Do you want to delete all favorite list") &&
      dispatch(deleteFavoriteArtsAction());
  };

  //useEffect
  useEffect(() => {
    dispatch(getFavoriteArtsAction());
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({
        type: isError
          ? "GET_FAVORITE_ARTS_RESET"
          : "DELETE_FAVORITE_ARTS_RESET",
      });
    }
  }, [dispatch, isError, deleteError, isSuccess]);

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Favorites Arts</h2>
          {likedArts?.length > 0 && (
            <button
              disabled={deleteLoading}
              onClick={deleteArtsHandler}
              className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded "
            >
              {deleteLoading ? "Loading..." : "Delete All"}
            </button>
          )}
        </div>
        {isLoading ? (
          <Loader />
        ) : likedArts.length > 0 ? (
          <Table data={likedArts} admin={false} />
        ) : (
          <Empty message="No arts list found" />
        )}
      </div>
    </SideBar>
  );
}

export default FavoritesArts;
