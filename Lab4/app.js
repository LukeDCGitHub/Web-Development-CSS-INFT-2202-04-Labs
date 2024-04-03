const express = require('express');
const animal = require('./routes/animal.router');
require('dotenv').config();

const app = express();

// set PORT using env file or 3000 if env is not found
const PORT = process.env.PORT || 3000;

// Set up user routes
app.use("/", animal);
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