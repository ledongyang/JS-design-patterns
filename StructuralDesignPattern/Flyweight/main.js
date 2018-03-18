// flyweight pattern conserves memory by sharing portions of an object between objects
// all of properties beside name is not unique, so that we can let tasks with same properties share same flyweight
const Task = function(data) {
  this.name = data.name;
  this.flyweight = FlyweightFactory.get(data.priority, data.project, data.user, data.completed);
  // this.priority = data.priority;
  // this.project = data.project;
  // this.user = data.user;
  // this.completed = data.completed;
}

function Flyweight(priority, project, user, completed) {
  this.priority = priority;
  this.project = project;
  this.user = user;
  this.completed = completed;
}

const FlyweightFactory = (function() {
  const flyweights = {};
  const get = function(priority, project, user, completed) {
    if (!flyweights[priority + project + user + completed]) {
      flyweights[priority + project + user + completed] = new Flyweight(priority, project, user, completed);
    }
    return flyweights[priority + project + user + completed];
  }

  const getCount = function() {
    let count = 0;
    for (let f in flyweights) count++;
    return count;
  }

  return {
    get: get,
    getCount: getCount
  }
})()

const tasks = (function taskCollection() {
  const tasks = {};
  let count = 0;
  const add = function(data) {
    tasks[data.name] = new Task(data);
    count++;
  };
  const get = function(name) {
    return tasks[name];
  };
  const getCount = function() {
    return count;
  };
  return {
    add: add,
    get: get,
    getCount: getCount
  }
})()

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for (var i = 0; i < 1000000; i++) {
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor((Math.random() * 5))],
        project: projects[Math.floor((Math.random() * 4))],
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    });
}

var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory ' + (afterMemory - initialMemory) / 1000000);

console.log('tasks: ', tasks.getCount());
console.log('flyweights: ', FlyweightFactory.getCount());
