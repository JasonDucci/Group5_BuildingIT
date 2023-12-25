import asyncHandler from "express-async-handler";
import User from "../Models/UserModels.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middlewares/Auth.js";

//Register Post /api/users/
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, image } = req.body;
  try {
    const userExists = await User.findOne({ email });
    //check if user is available
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //else create new user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      image,
    });

    //if users created successfully
    if (user) {
      res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user date");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Login Post /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    //Find user
    const user = await User.findOne({ email });
    // check if user is available
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      //Password and email not found
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update profile Put /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const { fullName, email, image } = req.body;
  try {
    // find user
    const user = await User.findById(req.user._id);
    // if user is available and then update it
    if (user) {
      user.fullName = fullName || user.fullName;
      user.email = email || user.email;
      user.image = image || user.image;

      const updatedUser = await user.save();
      //send updated data to user
      res.json({
        _id: updatedUser._id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        image: updatedUser.image,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      });
    }
    //else send error
    else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete profile Delete /api/users
const deleteUserProfile = asyncHandler(async (req, res) => {
  try {
    // find user
    const user = await User.findById(req.user._id);
    // if user exists
    if (user) {
      // if user is admin and he cannot be deleted
      if (user.isAdmin) {
        res.status(400);
        throw new Error("Admin cannot be deleted");
      }
      // else delete normal user
      await User.deleteOne({ _id: req.user._id });
      res.json({ message: "User deleted successfully" });
    }
    // else send error
    else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Change password Put /api/users/password
const changeUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    // find user
    const user = await User.findById(req.user._id);
    //if user is available
    if (user && (await bcrypt.compare(oldPassword, user.password))) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
      await user.save();
      res.json({ message: "Password updated successfully" });
    } else {
      res.status(401);
      throw new Error("invalid password");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get liked arts Get /api/users/favorites
const getLikedArts = asyncHandler(async (req, res) => {
  try {
    // find user
    const user = await User.findById(req.user._id).populate("likedArts");
    //if user is available
    if (user) {
      res.json(user.likedArts);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Add art to liked arts Post /api/users/favorites
const addLikedArt = asyncHandler(async (req, res) => {
  const { artId } = req.body;
  try {
    //find user
    const user = await User.findById(req.user._id);
    // if user is available
    if (user) {
      // if art is available or not
      //if art already liked
      if (user.likedArts.includes(artId)) {
        res.status(400);
        throw new Error("Art already liked");
      }
      //else add to liked list
      user.likedArts.push(artId);
      await user.save();
      res.json(user.likedArts);
    } else {
      res.status(404);
      throw new Error("Art not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Remove all liked arts Delete /api/users/favorites
const deleteLikedArts = asyncHandler(async (req, res) => {
  try {
    //find user
    const user = await User.findById(req.user._id);
    //if user is available so delete all liked list
    if (user) {
      user.likedArts = [];
      await user.save();
      res.json({ message: "Liked list deleted successfully" });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all users Get /api/users
const getUsers = asyncHandler(async (req, res) => {
  try {
    //find all users
    const users = await User.find({});
    //if user is available
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete user Delete /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  try {
    //find user
    const user = await User.findById(req.params.id);
    //if user is available
    if (user) {
      // if user is admin
      if (user.isAdmin) {
        res.status(400);
        throw new Error("Admin cannot be deleted");
      }
      //else delete user
      await user.deleteOne();
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export {
  registerUser,
  loginUser,
  updateUserProfile,
  deleteUserProfile,
  changeUserPassword,
  getLikedArts,
  addLikedArt,
  deleteLikedArts,
  getUsers,
  deleteUser,
};
