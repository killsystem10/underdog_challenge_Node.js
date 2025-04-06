const express = require('express');
const router = express.Router();
const getlogin = require("../controllers/loginController");
const Loginuser = require("../controllers/loginController");

router.route("/").get(getlogin).post(Loginuser);

module.exports=router;