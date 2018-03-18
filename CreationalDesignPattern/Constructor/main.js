// Constructor pattern use 'new' key word to construct a new object from constructor function call, they are indivisual objects, but also prototype linked, and set 'this' constext as the newly created object in constructor function.
// Putting function properties inside constructor will cause every instance had a copy of those properties, which is not efficient.
function Task(name) {
  this.name = name;
  this.completed = false;
  this.complete = function() {
    console.log('Completing task: ' + this.name + '!');
    this.completed = true;
  };
  this.save = function() {
    console.log('Saving Task: ' + this.name + '!');
  }
}

const task1 = new Task('create a demo for constructors');
const task2 = new Task('create a demo for modules');
const task3 = new Task('create a demo for singletons');
const task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();

