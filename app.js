const express = require("express"),
  bodyParser = require("body-parser"),
  routes = require("./routes"),
  { PORT, mongoUrl } = require("./config");

//connecting to database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pinova", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//instanciating our app
const app = express();
app.use(express.static("public"));
//parse incoming requests with bodyParser
app.use(bodyParser.json());
//parse incoming requests with urlencoded format
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
