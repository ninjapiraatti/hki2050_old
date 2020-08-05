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
	  location: "New York"
	},
	{
	  name: "Smith",
	  age: 27,
	  location: "Texas"
	},
	{
	  name: "Lisa",
	  age: 23,
	  location: "Chicago"
	}
  ];

router.post("/insert", function(req, res) {
	console.log('Yay, you pressed a button!');
	employees.insertMany(data, function(err, result) {
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