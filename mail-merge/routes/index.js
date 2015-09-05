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
    var update = false;
    var submit_to = req.body.submit_to;
    var submit_subject = req.body.submit_subject;
    var submit_body = req.body.submit_body;

    var eachLine =[];
    eachLine = req.body.submit_to.split('\n');//This is an array of strings        
    
    var convertToObject = function (){
        var objArr = [];
          for (var i = 0; i < eachLine.length; i++){
            var obj = {};
              obj['firstName'] = eachLine[i].split(', ')[0];
              obj['lastName'] = eachLine[i].split(', ')[1];
              obj['email'] = eachLine[i].split(', ')[2];
              objArr.push(obj)
         }
         return objArr
    }
    var contactInfo = convertToObject();


    res.render('other', { title: 'Mail Merger Confirmation Page', to: submit_to, subject: submit_subject,
      body: submit_body, update: true, to_list: contactInfo} )
});

module.exports = router;
