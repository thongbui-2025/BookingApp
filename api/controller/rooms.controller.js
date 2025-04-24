import Hotel from "../models/hotel.model.js";
import Room from "../models/room.model.js";

export const createRoom = async (req, res, next) => {
	const hotelId = req.params.hotelId;
	const newRoom = new Room(req.body);

	try {
		const savedRoom = await newRoom.save();
		try {
			await Hotel.findByIdAndUpdate(hotelId, {
				$push: { rooms: savedRoom._id },
			});
		} catch (error) {
			next(error);
		}
		res.status(200).json(savedRoom);
	} catch (error) {
		next(error);
	}
};

export const updateRoom = async (req, res) => {
	try {
		const updateRoom = await Room.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{
				new: true,
			}
		);
		res.status(201).json(updateRoom);
	} catch (error) {
		next(error);
	}
};

export const deleteRoom = async (req, res) => {
	try {
		await Room.findByIdAndDelete(req.params.id);
		res.status(201).json("Room has been deleted.");
	} catch (error) {
		next(error);
	}
};

export const getRoom = async (req, res) => {
	try {
		const room = await Room.findById(req.params.id);
		res.status(201).json(room);
	} catch (error) {
		next(error);
	}
};

export const getRooms = async (req, res, next) => {
	try {
		const rooms = await Room.find();
		res.status(201).json(rooms);
	} catch (error) {
		next(error);
	}
};
