import React, { useEffect } from "react";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import ArtsPage from "./Screens/Arts";
import SingleArt from "./Screens/SingleArt";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import Password from "./Screens/Dashboard/Password";
import FavoritesArts from "./Screens/Dashboard/FavoritesArts";
import ArtsList from "./Screens/Dashboard/admin/ArtList";
import Dashboard from "./Screens/Dashboard/admin/Dashboard";
import Categories from "./Screens/Dashboard/admin/Categories";
import Users from "./Screens/Dashboard/admin/Users";
import AddArt from "./Screens/Dashboard/admin/AddArt";
import ScrollOnTop from "./ScrollOnTop";
import ToastContainer from "./Components/Notifications/ToastContainer";
import { AdminProtectedRouter, ProtectedRouter } from "./ProtectedRouter";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "./Redux/Actions/CategoriesActions";
import { getAllArtsAction } from "./Redux/Actions/ArtsActions";
import { getFavoriteArtsAction } from "./Redux/Actions/userActions";
import toast from "react-hot-toast";
import EditArt from "./Screens/Dashboard/admin/EditArt";

function App() {
  Aos.init();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { isError, isSuccess } = useSelector((state) => state.userLikeArt);
  const { isError: catError } = useSelector((state) => state.categoryGetAll);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllArtsAction({}));
    if (userInfo) {
      dispatch(getFavoriteArtsAction());
    }
    if (isError || catError) {
      toast.error(isError || catError);
      dispatch({ type: "LIKE_ART_RESET" });
    }
    if (isSuccess) {
      dispatch({ type: "LIKE_ART_RESET" });
    }
  }, [dispatch, userInfo, isError, catError, isSuccess]);

  return (
    <>
      <ToastContainer />
      <ScrollOnTop>
        <Routes>
          {/*public */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/arts" element={<ArtsPage />} />
          <Route path="/arts/:search" element={<ArtsPage />} />
          <Route path="/art/:id" element={<SingleArt />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* client */}
          <Route element={<ProtectedRouter />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/password" element={<Password />} />
            <Route path="/favorites" element={<FavoritesArts />} />
            {/*admin */}
            <Route element={<AdminProtectedRouter />}>
              <Route path="/artlist" element={<ArtsList />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/users" element={<Users />} />
              <Route path="/addart" element={<AddArt />} />
              <Route path="/edit/:id" element={<EditArt />} />
            </Route>
          </Route>
        </Routes>
      </ScrollOnTop>
    </>
  );
}

export default App;
