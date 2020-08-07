// Routes
const express = require('express');
const router = express.Router();
const employees = require('../models/simple');

// const index = require('./index');

// // index.js
// router.get('/', function(req, res, next) {
// 	search.get(req, res, next);
// });

var data = [
	{
	  name: "John",
	  age: 21,
	  bio: "John is a good guy.",
	  imege: "ImageURL",
	  dem: 150,
	  id: "79b82da"
	}
  ];

router.post("/insert", function(req, res) {
	console.log('Yay, you pressed a button!');
	characters.insertMany(data, function(err, result) {
		if (err) {
			console.log(err);
			console.log('ERror');
		  res.json(err);
		} else {
			console.log('Maybe not error');
		  res.json(result);
		}
	  });
});

module.exports = router;