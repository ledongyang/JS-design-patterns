// OLOO delegation
var Task = {
  init: function(name) {
    this.name = name;
    this.completed = false;
  },
  complete: function() {
    console.log('Completing task: ' + this.name + '!');
    this.completed = true;
  },
  save: function() {
    console.log('Saving Task: ' + this.name + '!');
  }
}

// create a new object UrgentTask prototype linked to Task object
var UrgentTask = Object.create(Task);

UrgentTask.setUp = function(name, priority) {
  // delegated call
  this.init(name);
  this.priority = priority;
}

UrgentTask.notify = function() {
  console.log('Notify ' + this.name + ' to important people!');
}

UrgentTask.notifyAndSave = function() {
  this.notify();
  console.log('Do something special before saving!');
  // delegated call
  this.save();
}

var ut1 = Object.create(UrgentTask);
ut1.setUp('Urgent Task1', 1);
var ut2 = Object.create(UrgentTask);
ut2.setUp('Urgent Task2', 1);

ut1.complete();
ut1.notifyAndSave();
ut2.complete();
ut2.notifyAndSave();
