var data= require('../data.json');

var helper = require('../public/js/helper.js');


exports.view = function(req, res){
  res.render('secondhome', data);
}
