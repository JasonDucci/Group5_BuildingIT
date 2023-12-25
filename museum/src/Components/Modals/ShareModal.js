import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import {
  FaFacebook,
  FaLinkedin,
  FaReddit,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

function ShareArtModal({ modalOpen, setModalOpen, art }) {
  const shareData = [
    {
      icon: FaFacebook,
      shareButton: FacebookShareButton,
    },
    {
      icon: FaTwitter,
      shareButton: TwitterShareButton,
    },
    {
      icon: FaLinkedin,
      shareButton: LinkedinShareButton,
    },
    {
      icon: FaWhatsapp,
      shareButton: WhatsappShareButton,
    },
    {
      icon: FaReddit,
      shareButton: RedditShareButton,
    },
  ];
  const url = `${window.location.protocol}//${window.location.host}/art/${art?._id}`;
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
        <h2 className="text-2xl ">
          Share <span className="text-xl font-bold">"{art?.name}"</span>
        </h2>
        <form className="flex-rows flex-wrap gap-6 mt-6">
          {shareData.map((data, index) => (
            <data.shareButton key={index} url={url} quote="Emree | Art Museum">
              <div className="w-12 transition hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30">
                <data.icon />
              </div>
            </data.shareButton>
          ))}
        </form>
      </div>
    </MainModal>
  );
}

export default ShareArtModal;
