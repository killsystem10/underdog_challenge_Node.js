const express = require('express');
const router = express.Router();


router.route("/:id").get((req,res) => {
    res.send("view contact for id : " + req.params.id);
}).post((req,res) => {
    console.log(req.body);
    res.send("create contact for id : " + req.params.id);
}).put((req,res) => {
    res.send("update contact for id : " + req.params.id);
}).delete((req,res) => {
    res.send("delete contact for id : " + req.params.id);
})

module.exports = router;