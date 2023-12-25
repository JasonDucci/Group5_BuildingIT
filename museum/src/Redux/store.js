import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as User from "./Reducers/userReducers";
import * as categories from "./Reducers/CategoriesReducers";
import * as arts from "./Reducers/ArtsReducers";

const rootReducer = combineReducers({
  //user reducers
  userLogin: User.userLoginReducer,
  userRegister: User.userRegisterReducer,
  userUpdateProfile: User.userUpdateProfileReducer,
  userDeleteProfile: User.userDeleteProfileReducer,
  userChangePassword: User.userChangePasswordReducer,
  userGetFavoriteArts: User.userGetFavoriteArtsReducer,
  userDeleteFavoriteArts: User.userDeleteFavoriteArtsReducer,
  adminGetAllUsers: User.adminGetAllUsersReducer,
  adminDeleteUser: User.adminDeleteUserReducer,
  userLikeArt: User.userLikeArtReducer,

  //category reducers
  categoryGetAll: categories.getALLCategoriesReducer,
  categoryCreate: categories.createCategoryReducer,
  categoryUpdate: categories.updateCategoryReducer,
  categoryDelete: categories.deleteCategoryReducer,

  //arts reducers
  getAllArts: arts.artsListReducer,
  getRandomArts: arts.artsRandomReducer,
  getArtById: arts.artDetailsReducer,
  getTopRatedArt: arts.artTopRatedReducer,
  createReview: arts.createReviewReducer,
  deleteArt: arts.deleteArtReducer,
  deleteAllArts: arts.deleteAllArtsReducer,
  createArt: arts.createArtReducer,
  updateArt: arts.updateArtReducer,
});

//get userInfo from localStorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//initialState
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
