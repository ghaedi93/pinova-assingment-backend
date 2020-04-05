const User = require("../models/User");

exports.athenticateUser = async (req, res) => {
  const { userName } = req.body;
  try {
    /*checks to see if provided username is already existed or not ,based on result 
    redirects to either /login or /register with a ternary operator 
    */
    const reqUser = await User.findOne({ userName });
    reqUser ? res.redirect(307, "/login") : res.redirect(307, "/register");
  } catch (e) {
    res.json(e);
  }
};

exports.registerUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    await User.create({
      userName,
      password,
      showEmailPhoneScreen: true,
      showTermsAndCondition: false,
      showWelcomeScreen: false,
      balance: 100,
    }).then((createdUser) => {
      res.status(200).json(createdUser);
    });
  } catch (e) {
    res.json(e);
  }
};

exports.loginUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const reqUser = await User.findOne({ userName, password });
    /*checks to see if provided userName and password is found or not 
    if found resonds with content else throw and 401 error 
    */
    reqUser
      ? res.status(200).json(reqUser)
      : res.status(401).json("wronge Password");
  } catch (e) {
    res.json(e);
  }
};

exports.updateUser = async (req, res) => {
  const { _id } = req.body;
  try {
    /*
    update a user and then find that user and fetch it to front; 
    */
    await User.updateOne({ _id }, req.body);
    updatedUser = await User.findOne({ _id });
    res.status(200).json(updatedUser);
  } catch (e) {
    res.json(e);
  }
};
