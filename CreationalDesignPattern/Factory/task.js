const repoFactory = require('./repoFactory2');

const Task = function(data) {
  this.name = data.name;
  this.completed = false;
}

Task.prototype.complete = function() {
  console.log('Completing task: ' + this.name + '!');
  this.completed = true;
}

Task.prototype.save = function() {
  console.log('Saving Task: ' + this.name + '!');
  repoFactory.task.save(this);
}

module.exports = Task;
