// This is commonly refered to as Prototypal Inheritance
const Task = function(name) {
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

const myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// subclassing
const UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
}
// prototype linked
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function() {
  console.log('Notify important people.');
}

UrgentTask.prototype.save = function() {
  this.notify();
  console.log('Do something special before saving.');
  Task.prototype.save.call(this);
}

const ut = new UrgentTask('This is urgent', 1);

ut.complete();
ut.save();
console.log(ut);
