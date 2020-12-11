var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const DataSet = require('../collections/dataSet');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const dataSet = new DataSet({
    title: "Test",
    images: ["a","b","c"]
  });
  dataSet.save().then(result => {
    console.log(result);
    
  }).catch(err => console.log(err));
  
});

module.exports = router;
