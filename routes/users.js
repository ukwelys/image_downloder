var express = require('express');
var router = express.Router();
var connection = require('./db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var name = req.param('username')
  connection.query("select * from imageurl where status='New'", function(err, rows, fields){
    if(err) throw err

    var data = rows;
    // console.log(data);
    res.render('users', { title: 'New url\'s', username: name, newRecords: data });
  });

  // connection.end();
  return false;
});

module.exports = router;
