const express = require("express");
const app = express();

const dontenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

const authRoute = require("./Routes/auth");

dontenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", require("./Routes/auth"));
app.use("/api/users", require("./Routes/users"));
app.use("/api/posts", require("./Routes/posts"));

app.listen("5000", () => {
  console.log("Backend is runing");
});