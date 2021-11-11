const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");
const mongoDatabase = require("./mongoDatabase");

//Handling uncaught exception
process.on("uncaughtException", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to uncaught exception`);
	process.exit(1);
});

// dotenv config
dotenv.config({ path: "config/config.env" });

mongoDatabase();

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
	console.log("Mongodb database connected successfully");
});

const server = app.listen(process.env.PORT, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to unhandled promise rejection`);

	server.close(() => {
		process.exit(1);
	});
});
