const express = require('express');
const router = require("./routes/contactRoutes");
const app = express();
const dbConnect = require('./config/dbConnect');
dbConnect();

app.get("/", (req,res) => {
    res.send("hello killsystem10");
})
/* app.get("/contacts/:id", (req,res) => {
    res.send(`view contacts for id: ${req.params.id}`);
})

 */

/*
app.post("/contacts/:id", (req,res) => {
    res.send(`create contacts for ID: ${req.params.id}`);
})

app.put("contacts/:id", (req,res) => {
    res.send(`Update contact for ID : ${req.params.id}`);
})

app.delete("contacts/:id", (req,res) => {
    res.send(`Delete contact for ID : ${req.params.id}`);
})
*/
app.use("/contacts", require("./routes/contactRoutes"));
app.listen(3000, () => {
    console.log('server running');
})