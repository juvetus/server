const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
port = process.env.PORT;
token = process.env.TOKEN;

app.use("/login", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send({
    //token: process.env.TOKEN,
    //token: "1235-12358",
    token,
  });
});
console.log(`Your token is ${token}`);
app.listen(process.env.PORT, () =>
  console.log("API IS RUNNING ON PORT, port ", port)
);
