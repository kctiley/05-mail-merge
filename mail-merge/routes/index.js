var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail Merger' });
});

router.get('/other', function(req, res, next) {
  res.render('other', { title: 'Mail Merger' });
});

router.post('/other', function (req, res) {
    var submit_to = req.body.submit_to;
    var submit_subject = req.body.submit_subject;
    var submit_body = req.body.submit_body;
    var update = false;
    var toList =[];
    toList = req.body.submit_to.split('\n');


    res.render('other', { title: 'Mail Merger Confirmation Page', to: submit_to, subject: submit_subject,
      body: submit_body, update: true, to_list: toList} )
});

module.exports = router;
