const express = require("express");
const router = express.Router();
const { getLogin } = require("../controllers/loginController.js");

router.route("/").get(getLogin);

module.exports = router;
