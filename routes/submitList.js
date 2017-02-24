var data= require('../data.json');

var helper = require('../public/js/helper.js');


exports.handler = function(req, res){
  console.log(req.body);
  res.render('index', data);
}
