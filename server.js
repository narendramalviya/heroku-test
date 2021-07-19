const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
// const mongoose = require("mongoose");
// var multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
// db connection
// mongoose.connect("mongodb://localhost:27017/Blog", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	useFindAndModify: false,
// 	useCreateIndex: true,
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
// 	// we're connected!
// 	console.log("db connected");
// });

// configuration for multer ,file handling middleware
// var upload = multer({ dest: "uploads" });

// app middleware
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
	res.json({m:"Welcome home"});
});
app.get("/test", (req, res) => {
	res.json({m:"test route"});
});
const port = process.env.PORT || 7000;
app.listen(port, () => {
	console.log(`server running at port ${port}`);
});

process.on("uncaughtException", (err) => {
	console.log("uncaught exception", err);
});
