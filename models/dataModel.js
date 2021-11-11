const mongoose = require("mongoose");
const validator = require("validator");

const dataSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "Please enter your name"],
		maxLength: [30, "Name can not exceed 30 characters"],
		minLength: [4, "Name can not be less than 4 characters"],
	},
	lastName: {
		type: String,
		required: [true, "Please enter your name"],
		maxLength: [30, "Name can not exceed 30 characters"],
		minLength: [4, "Name can not be less than 4 characters"],
	},
	email: {
		type: String,
		required: [true, "Please enter your email "],
		unique: true,
		validate: [validator.isEmail, "Please enter valida email"],
	},
	phoneNo: {
		type: Number,
		required: [true, "Please enter phone number"],
	},
	location: {
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
	},
	hobbies: {
		type: String,
		default: "",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Data", dataSchema);
