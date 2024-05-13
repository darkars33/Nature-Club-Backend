const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./db/connectToDB");
const eventRoute = require("./routes/events.route");
const documentaryRoute = require("./routes/documentary.route");
const teamRoute = require("./routes/teams.route");

const app = express();
const PORT = 5000;
app.use(express.json());
dotenv.config();

app.use('/api', eventRoute);
app.use('/api', documentaryRoute);
app.use('/api', teamRoute);

app.get("/", (req, res) => {
          res.send("hello world");
})

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});