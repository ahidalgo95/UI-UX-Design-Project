var data = require('../data.json');
exports.addAnswer = function(req, res) { 
  var det = new Date();
  var title = "task";
  var date = det.toDateString();
  var items = req.query.name;
  var emoji = "emoj";
  var weather = "weather";
  var userobj = {"title": title, "date": date, "items": items, "emoji": emoji, "weather": weather};
  data.lists.unshift(userobj);
  res.render('list', data);
 }
