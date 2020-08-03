var express = require('express');
var router = express.Router();

/* GET info. */
router.get('/', function(req, res, next) {
	res.send("Henlo info");
	res.render('../app/views/info.vue', { title: 'HKI2050' });
});

module.exports = router;
