var data= require('../addedList.json');
var moreData= require('../data.json');
var combined= {"data": data, "moreData": moreData}; 



exports.addItem = function(req, res){
  console.log("hj");
  var title = req.query.name;
  var userobj = {"title": title};

  /*data.items.unshift(userobj);
  data.items[0].title="We have added "+title+" to our question bank!";i*/
  
  
  
  res.render('addList', combined);
};
