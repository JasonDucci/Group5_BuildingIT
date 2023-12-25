import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import ArtInfo from "../Components/Single/ArtInfo";
import ArtRates from "../Components/Single/ArtRates";
import Titles from "../Components/Titles";
import { BsCollectionFill } from "react-icons/bs";
import Art from "../Components/Art";
import ShareArtModal from "../Components/Modals/ShareModal";
import { useDispatch, useSelector } from "react-redux";
import { getArtByIdAction } from "../Redux/Actions/ArtsActions";
import Loader from "../Components/Notifications/Loader";
import { RiArtboardLine } from "react-icons/ri";

function SingleArt() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const sameClass = "w-full gap-6 flex-colo min-h-screen";
  const { isLoading, isError, art } = useSelector((state) => state.getArtById);
  const { arts } = useSelector((state) => state.getAllArts);

  const RelatedArts = arts?.filter((a) => a.category === art?.category);
  useEffect(() => {
    // art id
    dispatch(getArtByIdAction(id));
  }, [dispatch, id]);

  return (
    <Layout>
      {isLoading ? (
        <div className={sameClass}>
          <Loader />
        </div>
      ) : isError ? (
        <div className={sameClass}>
          <div className="flex-colo w-24 h-24 p-5 mb-4 rounded-full bg-dry text-subMain text-4xl">
            <RiArtboardLine />
          </div>
          <p className="text-border text-sm">Wrong thing happens</p>
        </div>
      ) : (
        <>
          <ShareArtModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            art={art}
          />
          <ArtInfo art={art} setModalOpen={setModalOpen} />
          <div className="container mx-auto min-h-screen px-2 my-6">
            <ArtRates art={art} />
            {/* related collection */}
            {RelatedArts?.length > 0 && (
              <div className="my-16">
                <Titles title="Related Arts" Icon={BsCollectionFill} />
                <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                  {RelatedArts?.map((art) => (
                    <Art key={art?._id} art={art} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </Layout>
  );
}
export default SingleArt;
