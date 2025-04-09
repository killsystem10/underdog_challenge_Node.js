const asyncHandler = require("express-async-handler");

const  getlogin = (req,res) => {
    res.render("home");
}

 const Loginuser = asyncHandler((req,res) => {
    const {username, password} = req.body;
    if (username === 'admin' && password === '12345678') {
        res.send("Login Success");
    } else {
        res.send("Login Failed");
    }
})
module.exports = { getlogin, Loginuser};
// module.exports = Loginuser;