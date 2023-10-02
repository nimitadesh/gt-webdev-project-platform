const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

console.log("MONGO_URI:", process.env.MONGO_URI);

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

app.use(cors());
app.use(express.json());

app.use("/users", require("./routes/userRoutes"));

// TODO - remove later
app.get("/test", (req, res) => {
  res.send("This is a test endpoint");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
