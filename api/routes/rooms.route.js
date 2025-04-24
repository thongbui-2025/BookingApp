import express from "express";

const roomsRoute = express.Router();

import {
	createRoom,
	deleteRoom,
	getRoom,
	getRooms,
	updateRoom,
} from "../controller/rooms.controller.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

// CREATE
roomsRoute.post("/:hotelId", verifyToken, verifyAdmin, createRoom);

// UPDATE
roomsRoute.put("/:id", verifyToken, verifyAdmin, updateRoom);

// DELETE
roomsRoute.delete("/:id", verifyToken, verifyAdmin, deleteRoom);

// GET
roomsRoute.get("/:id", getRoom);

// GET ALL
roomsRoute.get("/", getRooms);

export default roomsRoute;
