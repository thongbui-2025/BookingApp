import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema(
	{
		title: { type: String, required: true },
		price: { type: Number, required: true },
		maxPeople: { type: Number, required: true },
		desc: { type: String, required: true },
		roomNumber: [{ number: Number, unavailableDates: { type: [Date] } }],
		// hotelId: { type: String, required: true },
	},
	{ timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
