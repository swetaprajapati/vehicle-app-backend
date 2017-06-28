var express = require('express');
var router = express.Router();

var URL="mongodb://sweta1:123456@ds045882.mlab.com:45882/bustrackingapp";

const db=require('monk')(URL);

const docs=db.get('dbs');



/* GET home page. */
router.get('/welcome', function(req, res, next) {
  //res.render('index', { title: 'Express' });

    docs.find( {"id": "20170623"} ,function (err,docs) {
      if(err) console.log(err);
      else res.json(docs[0]);

  });




});

router.post('/welcomeppl', function(req, res, next) {
var username = req.body.name;
var pass=req.body.password;

   docs.insert({"name": username, "password": pass}, function (err, docs) {
        if (err) console.log(err)

      else res.send("Welcome to heroku");

    });

});


router.get('/geolocation',function (req,res,next) {
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;

    docs.insert({"lat": latitude,"long":longitude}, function (err,docs) {
        if (err) console.log(err)

        else res.send("values pushed to database");

    });

});


router.get('/push',function (req,res,next) {

    docs.update ({"emailid":"swetaprajapati1997@gmail.com",
    "id":"5e438"},{$push : {"group":{"name":"user3"}}
    },function (err,docs) {
        if (err) console.log(err)

        else res.send("Your update is successful");


    });

});










router.get('/wel', function(req, res, next) {
    res.send('sweta is working ');
});
module.exports = router;
