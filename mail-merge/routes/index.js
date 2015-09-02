var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail Merger' });
});

router.get('/other', function(req, res, next) {
  res.render('other', { title: 'Mail Merger' });
});

module.exports = router;
