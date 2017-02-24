
var data= require('../questions.json');

var helper = require('../public/js/helper.js');


exports.view = function(req, res){
    res.render('list', data);
};
