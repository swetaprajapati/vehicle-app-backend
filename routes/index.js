var express = require('express');
var router = express.Router();

var URL="mongodb://sweta1:123456@ds045882.mlab.com:45882/bustrackingapp"

const db=require('monk')(URL)

const docs=db.get('dbs')


/* GET home page. */
router.get('/welcome', function(req, res, next) {
  //res.render('index', { title: 'Express' });

    docs.find( {} ,function (err,docs) {
      if(err) console.log(err)
      else res.json(docs[1]);

  });




});

router.get('/welcomeppl', function(req, res, next) {

    docs.insert({"name": "chd", "place": "awesome"}, function (err, docs) {
        if (err) console.log(err)

        else res.send("Welcome to heroku");

    });

});





router.get('/wel', function(req, res, next) {
    res.send('sweta is working ');
});
module.exports = router;
