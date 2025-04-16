import express from "express";
import {
	createHotel,
	deleteHotel,
	getHotel,
	getHotels,
	updateHotel,
} from "../controller/hotels.controller.js";

const hotelsRoute = express.Router();

// CREATE
hotelsRoute.post("/", createHotel);

// UPDATE
hotelsRoute.put("/:id", updateHotel);

// DELETE
hotelsRoute.delete("/:id", deleteHotel);

// GET
hotelsRoute.get("/:id", getHotel);

// GET ALL
hotelsRoute.get("/", getHotels);

export default hotelsRoute;
