const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  cors = require("cors"),
  { PORT, mongoUrl } = require("./config");
const {
  athenticateUser,
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
} = require("./controllers");

//connecting to database
const mongoose = require("mongoose");
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => {
    console.log("connected to db");
  });

//instanciating our app
const app = express();
app.use(express.static(path.join(__dirname, "build")));
//parse incoming requests with bodyParser
app.use(bodyParser.json());
//parse incoming requests with urlencoded format
app.use(bodyParser.urlencoded({ extended: true }));
//changing request to fix  possible cross reference erros in react.
app.use(cors());

//Routes

app.post("/authenticate", athenticateUser);
app.post("/register", registerUser);
app.post("/login", loginUser);
app.put("/updateUser", updateUser);
//serve static build files
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
