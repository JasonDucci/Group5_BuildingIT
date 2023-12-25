import express from "express";
import {
  addLikedArt,
  changeUserPassword,
  deleteLikedArts,
  deleteUser,
  deleteUserProfile,
  getLikedArts,
  getUsers,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../Controllers/UserController.js";
import { protect, admin } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

router.put("/", protect, updateUserProfile);
router.delete("/", protect, deleteUserProfile);
router.put("/password", protect, changeUserPassword);
router.get("/favorites", protect, getLikedArts);
router.post("/favorites", protect, addLikedArt);
router.delete("/favorites", protect, deleteLikedArts);

router.get("/", protect, admin, getUsers);
router.delete("/:id", protect, admin, deleteUser);

export default router;
