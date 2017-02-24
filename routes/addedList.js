var data= require('../addedList.json');
exports.addItem = function(req, res){
  console.log("hj");

  var title = req.query.name;
  var userobj = {"title": title};
  data.items.unshift(userobj);
  data.items[0].title="We have added "+title+" to our question bank!";
  res.render('addList', data);
};
