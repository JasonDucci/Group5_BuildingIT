import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner";
import PopularArts from "../Components/Home/PopularArts";
import TopRated from "../Components/Home/TopRated";
import Promos from "../Components/Home/Promos";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllArtsAction,
  getRandomArtsAction,
  getTopRatedArtAction,
} from "../Redux/Actions/ArtsActions";
import toast from "react-hot-toast";

function HomeScreen() {
  const dispatch = useDispatch();
  const {
    isLoading: randomLoading,
    isError: randomError,
    arts: randomArts,
  } = useSelector((state) => state.getRandomArts);
  const {
    isLoading: topLoading,
    isError: topError,
    arts: topArts,
  } = useSelector((state) => state.getTopRatedArt);
  const { isLoading, isError, arts } = useSelector((state) => state.getAllArts);

  //useEffect
  useEffect(() => {
    //get random arts
    dispatch(getRandomArtsAction());
    //get all arts
    dispatch(getAllArtsAction({}));
    //get top rated art
    dispatch(getTopRatedArtAction());
    //if error
    if (isError || randomError || topError) {
      toast.error("Error");
    }
  }, [dispatch, isError, randomError, topError]);

  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner arts={arts} isLoading={isLoading} />
        <PopularArts arts={randomArts} isLoading={randomLoading} />
        <Promos />
        <TopRated arts={topArts} isLoading={topLoading} />
      </div>
    </Layout>
  );
}

export default HomeScreen;
