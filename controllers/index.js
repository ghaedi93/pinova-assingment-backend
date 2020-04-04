exports.athenticateUser = (req, res) => {
  const { userName, password } = req.body;
  if (userName === "javad" && password === "ghaedi") {
    res.redirect(307, "/login");
  } else {
    res.redirect(307, "/register");
  }
};

exports.registerUser = (req, res) => {
  const { userName, password } = req.body;
  res.json("registered user", userName, password);
};

exports.loginUser = (req, res) => {
  const { userName, password } = req.body;
  res.json("logined user", userName, password);
};
