import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
	const { username, email, password } = req.body;
	try {
		const hashed = await bcrypt.hash(password, 10);
		// const isValid = await bcrypt.compare(password, hashed);

		const newUser = new User({
			username,
			email,
			password: hashed,
		});
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (error) {
		next(error);
	}
};

export const login = async (req, res, next) => {
	const { username, password } = req.body;
	try {
		const user = await User.findOne({ username: username });
		if (!user) return next(createError(404, "User not found!"));

		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect)
			return next(createError(404, "Wrong password or username!"));

		const token = jwt.sign(
			{ id: user._id, isAdmin: user.isAdmin },
			process.env.JWT_SECRET
		);

		const { password: isAdmin, ...others } = user._doc;
		res.cookie("access_token", token, {
			httpOnly: true,
			// secure: true,
			// sameSite: "strict",
		})
			.status(200)
			.json(others);
	} catch (error) {
		next(error);
	}
};
