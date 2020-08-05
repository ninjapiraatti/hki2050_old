var express = require('express');
var router = express.Router();
var path = require('path');
const todoschema = require('../models/todoschema');

router.get(['/insertttt'], function(req, res, next) {
	res.sendFile(path.join (__dirname, '../public', 'index.html'));
});

module.exports = router;
