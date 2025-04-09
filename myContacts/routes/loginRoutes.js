const express = require('express');
const router = express.Router();
const { getlogin, Loginuser} = require("../controllers/loginController");

router.route("/").get(getlogin).post(Loginuser);

module.exports=router;