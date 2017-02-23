var question = require('../task.json');
var data = require('../data.json');
//var tasks = question;
var index = 3;//Math.floor(Math.random()*question.length);

var task = question[index];

exports.view = function(req, res){
    res.render('list', task);
};

exports.addAnswer = function(req, res) { 
  console.log(data);
  var title = "hi";
  var date = "today";
  var items = req.query.name;
  var emoji = "emoj";
  var weather = "weather";
  var userobj = {"title": title, "date": date, "items": items, "emoji": emoji, "weather": weather};
  console.log(userobj);
  data.lists.push(userobj);
  console.log(data);

  res.render('list', data);
 }
