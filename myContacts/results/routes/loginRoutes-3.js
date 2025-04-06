const express = require("express");
const router = express.Router();
const {
  getRegister,
  getLogin,
  loginUser,
} = require("../controllers/loginController.js");

router.route("/").get(getLogin).post(loginUser);
router.route("/register").get(getRegister);

module.exports = router;
