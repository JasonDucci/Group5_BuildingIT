import React, { useEffect } from "react";
import SideBar from "../SideBar";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../../Redux/Actions/userActions";
import toast from "react-hot-toast";
import { Empty } from "../../../Components/Notifications/Empty";
import Loader from "../../../Components/Notifications/Loader";
import { deleteArtAction } from "../../../Redux/Actions/ArtsActions";

function Dashboard() {
  const dispatch = useDispatch();
  const {
    isLoading: catLoading,
    isError: catError,
    categories,
  } = useSelector((state) => state.categoryGetAll);
  const {
    isLoading: userLoading,
    isError: userError,
    users,
  } = useSelector((state) => state.adminGetAllUsers);
  const { isLoading, isError, arts, totalArts } = useSelector(
    (state) => state.getAllArts
  );
  //delete art
  const { isLoading: deleteLoading, isError: deleteError } = useSelector(
    (state) => state.deleteArt
  );
  //handler
  const deleteArtHandler = (id) => {
    window.confirm("Do you want to delete this art?") &&
      dispatch(deleteArtAction(id));
  };

  //useEffect
  useEffect(() => {
    //get all users
    dispatch(getAllUsersAction());
    //if error
    if (isError || catError || userError || deleteError) {
      toast.error("Error");
    }
  }, [dispatch, isError, catError, userError, deleteError]);

  //dashboard
  const DashboardData = [
    {
      bg: "bg-rose-600",
      icon: FaRegListAlt,
      title: "Total Arts",
      total: isLoading ? "Loading..." : totalArts || 0,
    },
    {
      bg: "bg-orange-600",
      icon: HiViewGridAdd,
      title: "Total Categories",
      total: catLoading ? "Loading..." : categories?.length || 0,
    },
    {
      bg: "bg-blue-600",
      icon: FaUser,
      title: "Total Users",
      total: userLoading ? "Loading..." : users?.length || 0,
    },
  ];
  return (
    <SideBar>
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {DashboardData.map((data, index) => (
          <div
            key={index}
            className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
            >
              <data.icon />
            </div>
            <div className="col-span-3">
              <h2>{data.title}</h2>
              <p className="mt-2 font-bold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-md font-medium my-6 text-border">Recent Arts</h3>
      {isLoading || deleteLoading ? (
        <Loader />
      ) : arts.length > 0 ? (
        <Table
          data={arts?.slice(0, 6)}
          admin={true}
          onDeleteHandler={deleteArtHandler}
        />
      ) : (
        <Empty message="No arts list found" />
      )}
    </SideBar>
  );
}

export default Dashboard;
