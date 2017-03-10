var data= require('../data.json');
var questions = require('../questions.json');

var mergedData = {
  "data": data,
  "questions": questions
}
exports.view = function(req, res){
  res.render('addList', questions);
};
