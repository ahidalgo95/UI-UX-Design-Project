

var data= require('../data.json');
var question= require('../questions.json');
var helper = require('../public/js/helper.js');
var index=1; 
var index = Math.floor(Math.random()*questions.length);


//var tasks = question;
<<<<<<< HEAD
var index = 1;//Math.floor(Math.random()*question.length);
var task = question.tasks[index].task;
=======
//Math.floor(Math.random()*question.length);


var task = question.prompts[index].prompts;
exports.view = function(req, res){

>>>>>>> 3f8d6bf69adc21abc8efad79bd74db69c1d3ce12

exports.view = function(req, res){
    res.render('list', task);
};

<<<<<<< HEAD
/*exports.addAnswer = function(req, res) { 
=======
exports.addAnswer = function(req, res) {
>>>>>>> 3f8d6bf69adc21abc8efad79bd74db69c1d3ce12
  var det = new Date();
  var title = task;
  var date = det.toDateString();
  var items = req.query.name;
  var emoji = "emoj";
  var weather = "weather";
  var userobj = {"title": title, "date": date, "items": items, "emoji": emoji, "weather": weather};
  data.lists.unshift(userobj);
  res.render('list', data);
<<<<<<< HEAD
 }*/
=======
}
>>>>>>> 3f8d6bf69adc21abc8efad79bd74db69c1d3ce12
