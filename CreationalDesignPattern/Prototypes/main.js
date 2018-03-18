// Instead putting all methods directly on constructor function, we created them on Task.prototype object. Since all instances will prototype linked to Task.prototype, by the nature of the prototype chain works, each instance can access to all of the methods on constructor function prototype. And because of the 'new' key word, each instance object also bound itself as the 'this' context in the constructor and prototype methods.
function Task(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function() {
  console.log('Completing task: ' + this.name + '!');
  this.completed = true;
}

Task.prototype.save = function() {
  console.log('Saving Task: ' + this.name + '!');
}

const task1 = new Task('create a demo for constructors');
const task2 = new Task('create a demo for modules');
const task3 = new Task('create a demo for singletons');
const task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
