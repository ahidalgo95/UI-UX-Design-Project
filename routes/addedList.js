var data= require('../addedList.json');
exports.addItem = function(req, res){
  data.items.push(req.query.name);
  res.render('addedList');
};
