/*
  Names: Luke McMann, Blake Munro
  Student ID: 100893644, 100883548
  Date finished: 2024-04-17
*/

const express = require('express');
const bodyParser = require('body-parser');
const animal = require('./routes/animal.router');
require('dotenv').config();

const app = express();


// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Set PORT using env file or 3000 if env is not found
const PORT = process.env.PORT || 3000;

// Set up user routes
app.use("/", animal);

// setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");
app.get('/', (req, res) => {
    res.render('./animals/home', {
        pageTitle: "Home Page"
    })
});

// Listen to PORT
app.listen(PORT, () => {
    console.log(`Port 3000`);
})