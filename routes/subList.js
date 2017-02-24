var data = require('../data.json');
exports.addAnswer = function(req, res) { 
  var det = new Date();
  console.log(req.query);
  var title = req.query.taskTitle;
  var date = det.toDateString();
  var items = req.query.name;
  var emoji = "em em-" + req.query.mood;
  var weather = "em em-" + req.query.weather;
  var userobj = {"title": title, "date": date, "items": items, "emoji": emoji, "weather": weather};
  data.lists.unshift(userobj);
  res.render('subList', data);
 }
