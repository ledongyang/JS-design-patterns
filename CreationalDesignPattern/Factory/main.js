// Factory simplify object creation for each repo. Instead use variables for each type of repo, we create a factory, and getting each type of repo object from that repo factory.
const Task = require('./task');
const repoFactory = require('./repoFactory2');
// const taskRepo = require('./taskRepo');
// const userRepo = require('./userRepo');
// const projectRepo = require('./projectRepo');

const task1 = new Task(repoFactory.task.get(1));
const task2 = new Task(repoFactory.task.get(2));

const user = repoFactory.user.get(1);
const project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
