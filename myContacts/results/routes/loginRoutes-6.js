const express = require("express");
const router = express.Router();
const {
  getLogin,
  loginUser,
  logout,
} = require("../controllers/loginController.js");

router.route("/").get(getLogin).post(loginUser);
router.route("/logout").get(logout);

module.exports = router;
