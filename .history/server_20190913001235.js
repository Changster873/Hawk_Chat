const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(
        db, { useNewUrlParser: true }
    )
    .then(() => console.log("MONGO working");)