const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator");

//validate Email function
const validateEmail = function (email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, validate: validateEmail },
  phone: { type: String },
  acceptMarketing: { type: Boolean },
  showEmailPhoneScreen: { type: Boolean },
  showTermsAndCondition: { type: Boolean },
  showWelcomeScreen: { type: Boolean },
});

module.exports = User = mongoose.model("users", UserSchema);
