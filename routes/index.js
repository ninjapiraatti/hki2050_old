var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('../app/app.vue', { title: 'HKI2050' });
});

module.exports = router;
