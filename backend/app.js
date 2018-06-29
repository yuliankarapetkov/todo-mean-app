const express = require('express'),
    app = express();

// Dependencies
const mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

// Config
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

app.use('/', (req, res, next) => {
    res.send('Hello from the backend');
});

module.exports = app;