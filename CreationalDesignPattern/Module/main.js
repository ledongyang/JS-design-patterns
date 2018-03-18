const Task = require('./task');
const repo = require('./taskRepo');

const task1 = new Task(repo.get(1));
const task2 = new Task({name: 'create a demo for modules'});
const task3 = new Task({name: 'create a demo for singletons'});
const task4 = new Task({name: 'create a demo for prototypes'});

task1.complete();
task2.save();
task3.save();
task4.save();
