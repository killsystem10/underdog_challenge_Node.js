const express = require('express');
const router = express.Router();
const adminLayout = '../views/layouts/admin';
const nologoutadmin = '../views/layouts/admin-nologout';
const asynchandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/admin',(req,res) => {
    const locals = {
        title: '관리자 페이지'
    }
    res.render('admin/index', {locals, layout: nologoutadmin}); 
});

router.get('/register', asynchandler(async (req,res) => {
    res.render('admin/index', {layout: nologoutadmin})
}));

router.post('/register', asynchandler(async (req,res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create( {
        username: req.body.username,
        password: hashedPassword
    });
    res.json(`user created: ${user}`);
})
);

module.exports = router;