<<<<<<< HEAD

var data= require('../questions.json');

var helper = require('../public/js/helper.js');


exports.view = function(req, res){
    res.render('list', data);
=======
var data = require('../task.json');
var tasks = data.tasks
var index = Math.floor(Math.random()*tasks.length);

console.log(index);
var task = tasks[index];
exports.view = function(req, res){

    res.render('list', task);
>>>>>>> 4ba0bb437c6954c8bad1225ab349a6af4252fcb5
};
