const Data = require("../models/dataModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create New Data
exports.newData = catchAsyncErrors(async (req, res, next) => {
	const { firstName, lastName, email, phoneNo, location, hobbies } = req.body;

	const data = await Data.create({
		firstName,
		lastName,
		email,
		phoneNo,
		location,
		hobbies,
	});

	res.status(201).json({
		success: true,
		data,
	});
});

//Get Data
exports.getData = catchAsyncErrors(async (req, res, next) => {
	const data = await Data.find();

	res.status(200).json({
		success: true,
		data,
	});
});

//Update Data
exports.updateData = catchAsyncErrors(async (req, res, next) => {
	const data = await Data.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
	if (!data) {
		return next(new ErrorHandler("Data not found", 404));
	}
	res.status(200).json({
		success: true,
		data,
	});
});

//Deleting Data
exports.deleteData = catchAsyncErrors(async (req, res, next) => {
	const data = await Data.findById(req.params.id);

	if (!data) {
		return next(new ErrorHandler("Data not found", 404));
	}
	//await data.remove();
	await data.deleteOne();

	res.status(200).json({
		success: true,
		message: "Data deleted successfully",
	});
});
