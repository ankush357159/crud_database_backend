const express = require("express");

const {
	newData,
	getData,
	updateData,
	deleteData,
} = require("../controllers/dataController");

const router = express.Router();

router.route("/data/new").post(newData);
router.route("/getdata").get(getData);
router.route("/data/update/:id").put(updateData);
router.route("/data/delete/:id").delete(deleteData);

module.exports = router;
