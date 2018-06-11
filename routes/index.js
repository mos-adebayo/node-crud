var express = require('express');
var router = express.Router();
var UserController = require('../app/controller/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', UserController.list);
router.put('/user/update', UserController.update);
router.post('/user/create', UserController.create);
router.post('/user/remove', UserController.remove);

module.exports = router;
