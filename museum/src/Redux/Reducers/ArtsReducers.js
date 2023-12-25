import * as artsConstants from "../Constants/ArtsConstants";

//get all arts
export const artsListReducer = (state = { arts: [] }, action) => {
  switch (action.type) {
    case artsConstants.ARTS_LIST_REQUEST:
      return { isLoading: true };
    case artsConstants.ARTS_LIST_SUCCESS:
      return {
        isLoading: false,
        arts: action.payload.arts,
        pages: action.payload.pages,
        page: action.payload.page,
        totalArts: action.payload.totalArts,
      };
    case artsConstants.ARTS_LIST_FAIL:
      return { isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

//get random arts
export const artsRandomReducer = (state = { arts: [] }, action) => {
  switch (action.type) {
    case artsConstants.ARTS_RANDOM_REQUEST:
      return { isLoading: true };
    case artsConstants.ARTS_RANDOM_SUCCESS:
      return { isLoading: false, arts: action.payload };
    case artsConstants.ARTS_RANDOM_FAIL:
      return { isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

//get art by id
export const artDetailsReducer = (state = { art: {} }, action) => {
  switch (action.type) {
    case artsConstants.ART_DETAILS_REQUEST:
      return { isLoading: true };
    case artsConstants.ART_DETAILS_SUCCESS:
      return { isLoading: false, art: action.payload };
    case artsConstants.ART_DETAILS_FAIL:
      return { isLoading: false, isError: action.payload };
    case artsConstants.ART_DETAILS_RESET:
      return { art: {} };
    default:
      return state;
  }
};

//get top rated arts
export const artTopRatedReducer = (state = { arts: [] }, action) => {
  switch (action.type) {
    case artsConstants.ART_TOP_RATED_REQUEST:
      return { isLoading: true };
    case artsConstants.ART_TOP_RATED_SUCCESS:
      return { isLoading: false, arts: action.payload };
    case artsConstants.ART_TOP_RATED_FAIL:
      return { isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

//create art review
export const createReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case artsConstants.CREATE_REVIEW_REQUEST:
      return { isLoading: true };
    case artsConstants.CREATE_REVIEW_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case artsConstants.CREATE_REVIEW_FAIL:
      return { isLoading: false, isError: action.payload };
    case artsConstants.CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

//delete art
export const deleteArtReducer = (state = {}, action) => {
  switch (action.type) {
    case artsConstants.DELETE_ART_REQUEST:
      return { isLoading: true };
    case artsConstants.DELETE_ART_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case artsConstants.DELETE_ART_FAIL:
      return { isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

//delete all arts
export const deleteAllArtsReducer = (state = {}, action) => {
  switch (action.type) {
    case artsConstants.DELETE_ALL_ARTS_REQUEST:
      return { isLoading: true };
    case artsConstants.DELETE_ALL_ARTS_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case artsConstants.DELETE_ALL_ARTS_FAIL:
      return { isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

//create art
export const createArtReducer = (state = {}, action) => {
  switch (action.type) {
    case artsConstants.CREATE_ART_REQUEST:
      return { isLoading: true };
    case artsConstants.CREATE_ART_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case artsConstants.CREATE_ART_FAIL:
      return { isLoading: false, isError: action.payload };
    case artsConstants.CREATE_ART_RESET:
      return {};
    default:
      return state;
  }
};

//update art
export const updateArtReducer = (state = {}, action) => {
  switch (action.type) {
    case artsConstants.UPDATE_ART_REQUEST:
      return { isLoading: true };
    case artsConstants.UPDATE_ART_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case artsConstants.UPDATE_ART_FAIL:
      return { isLoading: false, isError: action.payload };
    case artsConstants.UPDATE_ART_RESET:
      return {};
    default:
      return state;
  }
};
