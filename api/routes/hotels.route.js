import express from "express";
import {
	createHotel,
	deleteHotel,
	getHotel,
	getHotels,
	updateHotel,
} from "../controller/hotels.controller.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const hotelsRoute = express.Router();

// CREATE
hotelsRoute.post("/", verifyToken, verifyAdmin, createHotel);

// UPDATE
hotelsRoute.put("/:id", verifyToken, verifyAdmin, updateHotel);

// DELETE
hotelsRoute.delete("/:id", verifyToken, verifyAdmin, deleteHotel);

// GET
hotelsRoute.get("/:id", getHotel);

// GET ALL
hotelsRoute.get("/", getHotels);

export default hotelsRoute;
