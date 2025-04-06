const express = require("express");
const router = express.Router();
const { getLogin, loginUser } = require("../controllers/loginController.js");

router.route("/").get(getLogin).post(loginUser);

module.exports = router;
