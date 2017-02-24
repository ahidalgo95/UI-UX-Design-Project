
var data= require('../questions.json');
var helper = require('../public/js/helper.js');
var tasks = data.prompts; 
var index = Math.floor(Math.random()*tasks.length);

console.log(index);
var task = tasks[index];
exports.view = function(req, res){

exports.view = function(req, res){
    res.render('list', tasks);
};
