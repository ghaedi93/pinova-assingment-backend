const express = require("express"),
  bodyParser = require("body-parser"),
  routes = require("./routes"),
  { PORT } = require("./config");
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
