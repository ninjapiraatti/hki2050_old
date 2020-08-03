var express = require('express');
var router = express.Router();
const taskBuilder = require('../controllers/taskController');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('list', { title: 'HKI2050' });
});

module.exports = router => {
  router
    .route('/tasks')
    .get(taskBuilder.list_all_tasks)
    .post(taskBuilder.create_a_task);

  router
    .route('/tasks/:taskId')
    .get(taskBuilder.read_a_task)
    .put(taskBuilder.update_a_task)
    .delete(taskBuilder.delete_a_task);
};