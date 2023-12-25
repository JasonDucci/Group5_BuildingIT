import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { likeArtAction } from "../Redux/Actions/userActions";

//check if art is added or not
const IfArtLiked = (art) => {
  const { likedArts } = useSelector((state) => state.userGetFavoriteArts);
  return likedArts?.find((likedArt) => likedArt?._id === art?._id);
};

//like art functionality
const LikeArt = (art, dispatch, userInfo) => {
  return !userInfo
    ? toast.error("Login to add to favorites")
    : dispatch(
        likeArtAction({
          artId: art._id,
        })
      );
};

export { IfArtLiked, LikeArt };
