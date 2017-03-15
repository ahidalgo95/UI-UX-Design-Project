var data= require('../data.json');
var taskData = require('../task.json');
var helper = require('../public/js/helper.js');



exports.view = function(req, res){
    var index = Math.floor(Math.random()*taskData.tasks.length);
    var task = taskData.tasks[index];
    res.render('list', task);
};

/*exports.addAnswer = function(req, res) { 
=======
exports.addAnswer = function(req, res) {
  var det = new Date();
  var title = task;
  var date = det.toDateString();
  var items = req.query.name;
  var emoji = "emoj";
  var weather = "weather";
  var userobj = {"title": title, "date": date, "items": items, "emoji": emoji, "weather": weather};
  data.lists.unshift(userobj);
  res.render('list', data);
 }*/
