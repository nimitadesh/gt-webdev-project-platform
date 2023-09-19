const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

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
