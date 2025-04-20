import express from "express";
import {
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from "../controller/users.controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const usersRoute = express.Router();

// usersRoute.get("/checkauthentication", verifyToken, (req, res) => {
// 	res.send("Hello user, you are logged in!");
// });
// usersRoute.get("/checkuser/:id",verifyToken, verifyUser, (req, res) => {
// 	res.send("Hello user, you are logged in and you can delete your account!");
// });
// usersRoute.get("/checkadmin/:id", verifyToken, verifyAdmin, (req, res) => {
// 	res.send("Hello admin, you are logged in and you can delete all accounts!");
// });

// UPDATE
usersRoute.put("/:id", verifyToken, verifyUser, updateUser);

// DELETE
usersRoute.delete("/:id", verifyToken, verifyUser, deleteUser);

// GET
usersRoute.get("/:id", verifyToken, verifyUser, getUser);

// GET ALL
usersRoute.get("/", verifyToken, verifyAdmin, getUsers);

export default usersRoute;
