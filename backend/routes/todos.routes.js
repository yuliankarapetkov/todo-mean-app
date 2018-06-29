const express = require('express'),
    router = express.Router();

const Todo = require('../models/todo');

router.get('/', (req, res) => {
    Todo.find({ user: req.userId })
        .then(todos => {
            res.status(200).json(todos);
        })
        .catch(error => {
            res.status(500).json({ error: error });
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id,
        userId = req.userId;

    Todo.findOne({ _id: id, user: userId })
        .then(todo => {
            if (todo) {
                res.status(200).json(todo);
            } else {
                res.status(404).json({ error: 'Todo Not Found' });
            }
        })
        .catch(error => {
            res.status(500).json({ error: error });
        });
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
    const id = req.params.id,
        userId = req.userId;

    Todo.updateOne({ _id: id, user: userId }, req.body)
        .then(result => {
            console.log('update', result);
            if (result.n > 0) {
                res.status(200).send();
            } else {
                res.status(404).json({ error: "Todo Not Found" });
            }
        })
        .catch(error => {
            res.status(500).json({ error: error });
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id,
        userId = req.userId;

    Todo.deleteOne({ _id: id, user: userId })
        .then(result => {
            console.log('delete', result);
            if (result.n > 0) {
                res.status(200).send();
            } else {
                res.status(404).json({ error: "Todo Not Found" });
            }
        })
        .catch(error => {
            res.status(500).json({ error: error });
        });
});

module.exports = router;