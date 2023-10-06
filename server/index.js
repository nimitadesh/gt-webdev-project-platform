const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const { MongoClient } = require("mongodb");

async function connectToDatabase() {
  try {
    const client = new MongoClient(process.env.MONGO_URI);

    await client.connect();
    const db = client.db("gtwebdevprojectplatform");

    console.log("Successfully connected to platform");

    // Now that you're connected, you can start your Express app
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());

    app.use("/users", require("./routes/userRoutes"));

    app.use("/", authRoute);

    // TODO - remove later
    app.get("/test", (req, res) => {
      res.send("This is a test endpoint");
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();
