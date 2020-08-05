// Routes
const express = require('express');
const router = express.Router();

// const index = require('./index');

// // index.js
// router.get('/', function(req, res, next) {
// 	search.get(req, res, next);
// });

router.get('/insert', function(req, res) {
	console.log(req);
	res.json("dsadfsfddsgsdfgsfds");
});

module.exports = router;