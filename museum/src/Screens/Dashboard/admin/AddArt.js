import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { Input, Message, Select } from "../../../Components/UsedInputs";
import Uploader from "../../../Components/Uploader";
import { MediumsData } from "../../../Data/MediumsData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { artValidation } from "../../../Components/Validation/ArtValidation";
import toast from "react-hot-toast";
import { InlineError } from "../../../Components/Notifications/Error";
import { Imagepreview } from "../../../Components/Imagepreview";
import { createArtAction } from "../../../Redux/Actions/ArtsActions";

function AddArt() {
  const [imageWithoutTitle, setImageWithoutTitle] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Selector
  const { categories } = useSelector((state) => state.categoryGetAll);
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.createArt
  );

  //validate art
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(artValidation),
  });
  //on submit
  const onSubmit = (data) => {
    dispatch(
      createArtAction({
        ...data,
        image: imageWithoutTitle,
        titleImage: imageTitle,
      })
    );
  };

  //useEffect
  useEffect(() => {
    if (isSuccess) {
      reset({
        name: "",
        year: 0,
        artist: "",
        medium: "",
        category: "",
        desc: "",
      });
      setImageTitle("");
      setImageWithoutTitle("");
      dispatch({ type: "CREATE_ART_RESET" });
      navigate("/addArt");
    }
    //error
    if (isError) {
      toast.error("Wrong thing happen");
      dispatch({ type: "CREATE_ART_RESET" });
    }
  }, [isSuccess, isError, dispatch, reset, navigate]);

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Create New Art</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              label="Art Title"
              placeholder="Hello World"
              type="text"
              bg={true}
              name="name"
              register={register("name")}
            />
            {errors.name && <InlineError text={errors.name.message} />}
          </div>
          <div className="w-full">
            <Input
              label="Year"
              placeholder="2023"
              type="number"
              bg={true}
              name="year"
              register={register("year")}
            />
            {errors.year && <InlineError text={errors.year.message} />}
          </div>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              label="Artist"
              placeholder="Artist name"
              type="text"
              bg={true}
              name="artist"
              register={register("artist")}
            />
            {errors.artist && <InlineError text={errors.artist.message} />}
          </div>
          {/*Medium */}
          <div className="w-full text-sm">
            <Input
              label="Medium"
              placeholder="Medium name"
              type="text"
              bg={true}
              name="medium"
              register={register("medium")}
            />
            {errors.medium && <InlineError text={errors.medium.message} />}
          </div>
        </div>

        {/* Img */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* Img without Title Upload*/}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without Title
            </p>
            <Uploader setImageUrl={setImageWithoutTitle} />
            <Imagepreview image={imageWithoutTitle} name="imageWithoutTitle" />
          </div>
          {/* Img withTitle Upload*/}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image with Title
            </p>
            <Uploader setImageUrl={setImageTitle} />
            <Imagepreview image={imageTitle} name="imageTitle" />
          </div>
        </div>
        {/*Category*/}
        <div className="text-sm w-full">
          <Select
            label="Art Cartegory"
            options={categories?.length > 0 ? categories : []}
            name="category"
            register={{ ...register("category") }}
          />
          {errors.category && <InlineError text={errors.category.message} />}
        </div>

        {/* Description */}
        <div className="w-full">
          <Message
            label="Art Description"
            placeholder="Description"
            name="desc"
            register={{ ...register("desc") }}
          />
          {errors.desc && <InlineError text={errors.desc.message} />}
        </div>

        {/* Submit btn */}
        <button
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
          className="bg-subMain w-full flex-rows gap-4 font-medium transitions hover:bg-dry border border-subMain text-white  py-3 rounded"
        >
          {isLoading ? "Loading..." : "Publish Art"}
        </button>
      </div>
    </SideBar>
  );
}

export default AddArt;
