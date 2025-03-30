const express = require('express');
const app = express();
app.get("/", (req,res) => {
    res.send("hello killsystem10");
})
app.get("/contacts/:id", (req,res) => {
    res.send("view Contact for ID :", req.params.id);
})
app.post("/contacts/:id", (req,res) => {
    res.send('create contacts',req.params.id);
})

app.put("contacts/:id", (req,res) => {
    res.send(`Update contact for ID : ${req.params.id}`);
})

app.delete("contacts/:id", (req,res) => {
    res.send(`Delete contact for ID : ${req.params.id}`);
})

app.listen(3000, () => {
    console.log('server running');
})