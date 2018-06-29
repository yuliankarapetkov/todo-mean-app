const express = require('express'),
    router = express.Router();

const User = require('../models/user'),
    Todo = require('../models/todo');

router.get('/', (req, res) => {
    res.status(200).send(req.userId);
});

router.get('/:id', (req, res) => {
    res.status(200).send();
});

router.post('/', (req, res) => {
    const todo = new Todo({
        description: req.body.description,
        user: req.userId
    });

    todo.save()
        .then(savedTodo => {
            res.status(201).json(savedTodo);
        })
        .catch(error => {
            res.status(500).json({ error: error });
        });
});

router.put('/:id', (req, res) => {
    res.status(200).send();
});

router.delete('/:id', (req, res) => {
    res.status(200).send();
});

module.exports = router;