const express = require("express"),
  router = express.Router();
const {
  athenticateUser,
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
} = require("../controllers");

router.post("/authenticate", athenticateUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/user", updateUser);

module.exports = router;
