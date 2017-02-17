var data= require('../data.json');

var helper = require('../public/js/helper.js');


exports.view = function(req, res){
  console.log(req.query);
  var index = helper.getIndex();

  var list = data.lists[index];
  res.render('index', {
    index: index,
    list: list
  });
}
