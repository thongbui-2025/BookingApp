import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.route.js";
import usersRoute from "./routes/users.route.js";
import hotelsRoute from "./routes/hotels.route.js";
import roomsRoute from "./routes/rooms.route.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("MongoDB disconnected");
});

// middleware
app.use(cookieParser()); // Gắn middleware vào app
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// app.use((req, res, next) => {
// 	// console.log("hi is middleware");
// 	res.send("hi from middleware");
// 	next();
// });

// Khi next(err) được gọi, Express sẽ bỏ qua các middleware và routes còn lại, chuyển đến middleware xử lý lỗi mà bạn đã viết.
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong!";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

app.listen(3000, () => {
	connect();
	console.log("Server is running on port 3000");
});
