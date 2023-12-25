import express, { Router } from "express";
import { protect, admin } from "../middlewares/Auth.js";
import * as artsController from "../Controllers/ArtsController.js";

const router = express.Router();

router.post("/import", artsController.importArts);
router.get("/", artsController.getArts);
router.get("/:id", artsController.getArtById);
router.get("/rated/top", artsController.getTopRatedArts);
router.get("/random/all", artsController.getRandomArts);

router.post("/:id/reviews", protect, artsController.createArtReview);

router.put("/:id", protect, admin, artsController.updateArt);
router.delete("/:id", protect, admin, artsController.deleteArt);
router.delete("/", protect, admin, artsController.deleteAllArts);
router.post("/", protect, admin, artsController.createArt);

export default router;
