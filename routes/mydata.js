var express = require('express');
var router = express.Router();

/* Loads mydata page . */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Rahul Dasari' });
});

module.exports = router;
