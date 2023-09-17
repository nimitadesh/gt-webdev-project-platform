const express = require("express");
const app = express();
const port = 3001;

app.get("/test", (req, res) => {
  res.send("This is a test endpoint");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
