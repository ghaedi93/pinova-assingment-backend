const express = require("express"),
  router = express.Router(),
  { athenticateUser, logoutUser, updateUser } = require("../controllers");

router.post("/authenticate", athenticateUser);
router.post("/logout", logoutUser);
router.put("/user", updateUser);

module.exports = router;
