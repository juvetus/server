const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/", (req, res) => {
  res.send({
    token: "todo123",
  });
});

app.listen(8000, () => console.log("API IS RUNNING ON PORT 8000"));
