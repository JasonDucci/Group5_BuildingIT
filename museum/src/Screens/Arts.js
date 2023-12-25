import React, { useEffect, useMemo, useState } from "react";
import Layout from "../Layout/Layout";
import Filters from "../Components/Filters";
import Art from "../Components/Art";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../Components/Notifications/Loader";
import { RiArtboardLine } from "react-icons/ri";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { getAllArtsAction } from "../Redux/Actions/ArtsActions";
import { MediumsData, RatesData, YearData } from "../Data/FilterData";
import { useParams } from "react-router-dom";

function ArtsPage() {
  const { search } = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState({ title: "All Categories" });
  const [year, setYear] = useState(YearData[0]);
  const [mediums, setMediums] = useState(MediumsData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const sameClass =
    "text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain";
  //all arts
  const { isLoading, isError, arts, pages, page } = useSelector(
    (state) => state.getAllArts
  );
  //get all cate
  const { categories } = useSelector((state) => state.categoryGetAll);
  //queries
  const queries = useMemo(() => {
    const query = {
      category: category?.title === "All Categories" ? "" : category?.title,
      year: year?.title.replace(/\D/g, ""),
      medium: mediums?.title === "Medium range" ? "" : mediums?.title,
      rate: rates?.title.replace(/\D/g, ""),
      search: search ? search : "",
    };
    return query;
  }, [category, year, mediums, rates, search]);
  //useEffect
  useEffect(() => {
    //if error
    if (isError) {
      toast.error(isError);
    }
    //get all arts
    dispatch(getAllArtsAction(queries));
  }, [dispatch, isError, queries]);

  //pagination previous and next
  const nextPage = () => {
    dispatch(
      getAllArtsAction({
        ...queries,
        pageNumber: page + 1,
      })
    );
  };
  const prevPage = () => {
    dispatch(
      getAllArtsAction({
        ...queries,
        pageNumber: page - 1,
      })
    );
  };

  const datas = {
    categories: categories,
    category: category,
    setCategory: setCategory,
    year: year,
    setYear: setYear,
    mediums: mediums,
    setMediums: setMediums,
    rates: rates,
    setRates: setRates,
  };

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters data={datas} />
        <p className="text-lg font-medium my-6">
          Total{" "}
          <span className="font-bold text-subMain">
            {arts ? arts?.length : 0}
          </span>{" "}
          items Found {search && `for "${search}"`}
        </p>
        {isLoading ? (
          <div className={sameClass}>
            <Loader />
          </div>
        ) : arts?.length > 0 ? (
          <>
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {arts.map((art, index) => (
                <Art key={index} art={art} />
              ))}
            </div>
            {/*Loading more list*/}
            <div className="w-full flex-rows gap-5 md:my-20 my-10">
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
          <div className="w-full gap-6 flex-colo min-h-screen">
            <div className="w-24 h-24 p-4 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo">
              <RiArtboardLine />
            </div>
            <p className="text-border text-sm">No Art Available</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ArtsPage;
