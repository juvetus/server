const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
port = process.env.PORT;
token = process.env.TOKEN;
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.send({
//     token,
//   });
//   next();
// });
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// app.use("/login");
app.use("/login", function (req, res) {
  res.send({
    token,
  });
});

// app.use("/login", (req, res) => {
//   res.send({
//     //token: process.env.TOKEN,
//     //token: "1235-12358",
//     token,
//   });
// });
console.log(`Your token is ${token}`);
app.listen(process.env.PORT, () =>
  console.log("API IS RUNNING ON PORT, port ", port)
);
