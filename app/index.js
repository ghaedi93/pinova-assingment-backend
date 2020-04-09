const express = require("express"),
  routes = require("../routes"),
  bodyParser = require("body-parser"),
  path = require("path"),
  cors = require("cors");

//instanciating app
const app = express();
app.use(express.static(path.join(__dirname, "build")));
//parse incoming requests with bodyParser
app.use(bodyParser.json());
//parse incoming requests with urlencoded format
app.use(bodyParser.urlencoded({ extended: true }));
//changing request to fix  possible cross reference erros in react.
app.use(cors());
//serving routes
app.use("/", routes);

module.exports = app;
