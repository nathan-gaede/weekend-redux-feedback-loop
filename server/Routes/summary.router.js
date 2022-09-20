const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST to database

router.post('/', (req, res) => {
console.log('in router.post', req.body);
let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
let {feeling, understanding, support, comment} = req.body;
pool.query(queryText, [feeling, understanding, support, comment])
.then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log(error);
    res.sendStatus(500);
});
});

module.exports = router;