const express = require('express'),
    router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send();
});

router.get('/:id', (req, res, next) => {
    res.status(200).send();
});

router.post('/', (req, res, next) => {
    res.status(200).send();
});

router.put('/:id', (req, res, next) => {
    res.status(200).send();
});

router.delete('/:id', (req, res, next) => {
    res.status(200).send();
});

module.exports = router;