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

    //Logic to convert submit_to text area to array of objects
    var eachLineSubmitTO =[];
    eachLine = req.body.submit_to.split('\n');//This is an array of strings of each line 
    var numOfRecipients = eachLine.length           
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
    var contactInfo = convertToObject();//contactInfo is array of objects


    //Convert submit_body text area to array of separate lines.
    var eachLineSubmitBody =[];
    eachLineBodyToArr = req.body.submit_body.split('\n');//This is an array of strings  


    res.render('other', { title: 'Preview Page', to: submit_to, subject: submit_subject,
      body: eachLineBodyToArr, update: true, to_list: contactInfo, numOfRecipients: numOfRecipients} )
});



module.exports = router;














