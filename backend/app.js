const express = require('express'),
    app = express();

// External Dependencies
const mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

// Database Config
const connectionString = require('./db.config');

mongoose
    .connect(connectionString)
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });

// Config
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

// Routes Imports
const authRoutes = require('./routes/auth.routes'),
    todoRoutes = require('./routes/todos.routes');

const checkAuth = require('./middleware/check-auth');

// Routing Config
app.use('/api/auth', authRoutes)
app.use('/api/todos', checkAuth, todoRoutes);

module.exports = app;