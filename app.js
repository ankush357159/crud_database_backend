const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route import
const data = require("./routes/dataRoute");

app.use("/api/v1", data);

module.exports = app;
