const express = require('express'),
    app = express();

// External Dependencies
const mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

// Routes
const todoRoutes = require('./routes/todos.routes');

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

// Routing Config
app.use('/api/todos', todoRoutes);

module.exports = app;