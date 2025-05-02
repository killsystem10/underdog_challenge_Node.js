const express = require('express');
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const post = require('../models/post');
const asynchandler = require('express-async-handler');

router.get(['/','/home'],asynchandler(async (req,res) => {
    const locals = {
        title: 'Home'
    };
    const data = await post.find();
    res.render('index', {locals, data, layout: mainLayout});
}));

router.get('/about',(req,res) => {
    const locals = {
        title: 'about'
    }
    res.render('about', {locals, layout: mainLayout});
});
 
router.get(
    "/post/:id",
    asynchandler(async (req,res) => {
        const data = await post.findOne({_id: req.params.id});
        res.render('post', {data, layout: mainLayout});
    })
)
module.exports = router;