import express from "express";
import {
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from "../controller/users.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const usersRoute = express.Router();

usersRoute.get("/checkauthentication", verifyToken, (req, res, next) => {
	res.send("Hello user, you are logged in!");
	// next();
});

// UPDATE
usersRoute.put("/:id", updateUser);

// DELETE
usersRoute.delete("/:id", deleteUser);

// GET
usersRoute.get("/:id", getUser);

// GET ALL
usersRoute.get("/", getUsers);

export default usersRoute;
