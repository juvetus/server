const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
port = process.env.PORT;
token = process.env.TOKEN;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send({
    token,
  });
  next();
});

console.log(`Your token is ${token}`);
app.listen(process.env.PORT, () =>
  console.log("API IS RUNNING ON PORT, port ", port)
);
