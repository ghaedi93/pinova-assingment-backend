const express = require("express");
const router = express.Router();

const {
  athenticateUser,
  registerUser,
  loginUser,
  updateUser,
} = require("../controllers");

/**
 * @route  GET /*
 * @desc   serve static files of our react project
 * @access Public
 */
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/**
 * @route  POST /authenticate
 * @desc   a post request containing userName and password is fed to athenticateUser controller
 * based on presence of user in database redirect request to /register or /login routes
 * @access Public
 */
router.post("/authenticate", athenticateUser);

/**
 * @route  POST /register
 * @desc   registers a user in db
 * @access Public
 */
router.post("/register", registerUser);

/**
 * @route  POST /login
 * @desc   fetchs all data associated with a user
 * @access Public
 */
router.post("/login", loginUser);

/**
 * @route  PUT /updateUser
 * @desc   update a user
 * @access Public
 */
router.put("/updateUser", updateUser);

module.exports = router;
