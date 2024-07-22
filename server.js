const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDB = require("./db/connectToDB");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary").v2;

const eventRoute = require("./routes/events.route");
const documentaryRoute = require("./routes/documentary.route");
const teamRoute = require("./routes/teams.route");
const authRoute = require("./routes/auth.route");

const app = express();
const PORT = 5000;
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api", eventRoute);
app.use("/api", documentaryRoute);
app.use("/api", teamRoute);
app.use("/api", authRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});
