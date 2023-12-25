import * as artsConstants from "../Constants/ArtsConstants";
import * as artsAPIs from "../APIs/ArtsServices";
import toast from "react-hot-toast";
import { ErrorsAction, tokenProtection } from "../Protection";

//get all arts action
export const getAllArtsAction =
  ({
    category = "",
    year = "",
    medium = "",
    rate = "",
    search = "",
    pageNumber = "",
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: artsConstants.ARTS_LIST_REQUEST });
      const response = await artsAPIs.getAllArtsService(
        category,
        year,
        medium,
        rate,
        search,
        pageNumber
      );
      dispatch({ type: artsConstants.ARTS_LIST_SUCCESS, payload: response });
    } catch (error) {
      ErrorsAction(error, dispatch, artsConstants.ARTS_LIST_FAIL);
    }
  };

//get random arts action
export const getRandomArtsAction = () => async (dispatch) => {
  try {
    dispatch({ type: artsConstants.ARTS_RANDOM_REQUEST });
    const response = await artsAPIs.getRandomArtsService();
    dispatch({ type: artsConstants.ARTS_RANDOM_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, artsConstants.ARTS_RANDOM_FAIL);
  }
};

//get art by id action
export const getArtByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: artsConstants.ART_DETAILS_REQUEST });
    const response = await artsAPIs.getArtByIdService(id);
    dispatch({ type: artsConstants.ART_DETAILS_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, artsConstants.ART_DETAILS_FAIL);
  }
};

//get top rated art action
export const getTopRatedArtAction = () => async (dispatch) => {
  try {
    dispatch({ type: artsConstants.ART_TOP_RATED_REQUEST });
    const response = await artsAPIs.getTopRatedArtService();
    dispatch({ type: artsConstants.ART_TOP_RATED_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, artsConstants.ART_TOP_RATED_FAIL);
  }
};

//review art action
export const reviewArtAction =
  ({ id, review }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: artsConstants.CREATE_REVIEW_REQUEST });
      const response = await artsAPIs.reviewArtService(
        tokenProtection(getState),
        id,
        review
      );
      dispatch({
        type: artsConstants.CREATE_REVIEW_SUCCESS,
        payload: response,
      });
      toast.success("Review created successfully");
      dispatch({ type: artsConstants.CREATE_REVIEW_RESET });
      dispatch(getArtByIdAction(id));
    } catch (error) {
      ErrorsAction(error, dispatch, artsConstants.CREATE_REVIEW_FAIL);
    }
  };

//delete art action
export const deleteArtAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: artsConstants.DELETE_ART_REQUEST });
    const response = await artsAPIs.deleteArtService(
      tokenProtection(getState),
      id
    );
    dispatch({
      type: artsConstants.DELETE_ART_SUCCESS,
      payload: response,
    });
    toast.success("Art deleted successfully");
    dispatch(getAllArtsAction({}));
  } catch (error) {
    ErrorsAction(error, dispatch, artsConstants.DELETE_ART_FAIL);
  }
};

//delete all arts action
export const deleteAllArtsAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: artsConstants.DELETE_ALL_ARTS_REQUEST });
    const response = await artsAPIs.deleteAllArtsService(
      tokenProtection(getState)
    );
    dispatch({
      type: artsConstants.DELETE_ALL_ARTS_SUCCESS,
      payload: response,
    });
    toast.success("All arts deleted successfully");
    dispatch(getAllArtsAction({}));
  } catch (error) {
    ErrorsAction(error, dispatch, artsConstants.DELETE_ALL_ARTS_FAIL);
  }
};

//create art action
export const createArtAction = (art) => async (dispatch, getState) => {
  try {
    dispatch({ type: artsConstants.CREATE_ART_REQUEST });
    const response = await artsAPIs.createArtService(
      tokenProtection(getState),
      art
    );
    dispatch({
      type: artsConstants.CREATE_ART_SUCCESS,
      payload: response,
    });
    toast.success("Art created successfully");
    //dispatch(getAllArtsAction({}));
  } catch (error) {
    ErrorsAction(error, dispatch, artsConstants.CREATE_ART_FAIL);
  }
};

//update art action
export const updateArtAction = (id, art) => async (dispatch, getState) => {
  try {
    dispatch({ type: artsConstants.UPDATE_ART_REQUEST });
    const response = await artsAPIs.updateArtService(
      tokenProtection(getState),
      id,
      art
    );
    dispatch({
      type: artsConstants.UPDATE_ART_SUCCESS,
      payload: response,
    });
    toast.success("Art updated successfully");
    dispatch(getArtByIdAction(id));
  } catch (error) {
    ErrorsAction(error, dispatch, artsConstants.UPDATE_ART_FAIL);
  }
};
