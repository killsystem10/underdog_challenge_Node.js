const express = require('express');
const app = express();
app.get("/", (req,res) => {
    res.send("hello killsystem10");
})
app.get("/contacts", (req,res) => {
    res.send("contacts page");
})
app.listen(3000, () => {
    console.log('server running');
})