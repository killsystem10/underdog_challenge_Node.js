require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(expressLayouts);
app.use('/',require('./routes/main'));
app.use('/',require('./routes/admin'));
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port,() => {
    console.log(`App listening on port ${port}`);
});