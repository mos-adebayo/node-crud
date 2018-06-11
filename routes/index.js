var express = require('express');
var router = express.Router();
var UserController = require('../app/controller/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user/create', UserController.create);

module.exports = router;
