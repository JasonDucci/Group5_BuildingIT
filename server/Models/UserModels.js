import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Provide your fullname"],
    },
    email: {
      type: String,
      required: [true, "Provide your email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Provide your password"],
      minlength: [8, "Password must be at least 8 characters"],
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    likedArts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Arts",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
