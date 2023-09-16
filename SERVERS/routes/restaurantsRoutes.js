import express from "express";
import {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById,
} from "../controllers/restaurantsController.js";

const router = express.Router();

router.get("/restaurants", getAllRestaurants);
router.post("/restaurants", createRestaurant);
router.get("/restaurants/:id", getRestaurantById);

export default router;
