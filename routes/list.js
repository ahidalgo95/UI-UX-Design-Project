var data = require('../task.json');
var tasks = data.tasks
var index = Math.floor(Math.random()*tasks.length);

console.log(index);
var task = tasks[index];
exports.view = function(req, res){

    res.render('list', task);
};
