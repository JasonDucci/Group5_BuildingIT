import * as yup from "yup";

const ReviewValidation = yup.object().shape({
  comment: yup
    .string()
    .required("Comment is required")
    .max(100, "Comment must be less than 100 characters"),
  rating: yup.number().required("Rating is required"),
});

const artValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(40, "Art name must be less than 40 characters"),
  year: yup.number().required("Year is required"),
  medium: yup.string().required("Medium is required"),
  artist: yup
    .string()
    .required("Artist is required")
    .max(40, "Artist name must be less than 40 characters"),
  category: yup.string().required("Category is required"),
  desc: yup
    .string()
    .required("Description is required")
    .max(900, "Description must be less than 900 characters"),
});

export { ReviewValidation, artValidation };
