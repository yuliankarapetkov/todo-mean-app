const express = require('express'),
    router = express(),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken');

const User = require('../models/user');

const jwtKey = process.env.JWT_KEY;

router.post('/signup', (req, res, next) => {
    const user = new User({});
    user.save()
        .then(user => {
            const token = jwt.sign(
                {
                    _id: user._id
                },
                jwtKey,
                {
                    expiresIn: '7d'
                });

            res.status(201).json({ token: token });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
});

module.exports = router;