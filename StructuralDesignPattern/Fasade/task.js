// Instead of calling each indivisual function one by one inside of main, we wrap all of the function calls inside a single function, and call them at once.
const Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

const TaskService = (function() {
  return {
    complete: function(task) {
      task.completed = true;
      console.log('completing task: ' + task.name);
    },
    setCompleteDate: function(task) {
      task.completedDate = new Date();
      console.log(task.name + ' completed on ' + task.completedDate);
    },
    notifyCompletion: function(task, user) {
      console.log('Notifying ' + user + ' of the completion of ' + task.name);
    },
    save: function(task) {
      console.log('Saving task ' + task.name);
    }
  }
})();

const TaskServiceWrapper = (function() {
  const completeAndNotify = function(myTask) {
    TaskService.complete(myTask);
    if (myTask.completed === true) {
      TaskService.setCompleteDate(myTask);
      TaskService.notifyCompletion(myTask, myTask.user);
      TaskService.save(myTask);
    }
  }
  return {
    completeAndNotify:  completeAndNotify
  }
})()

const myTask = new Task({
  name: 'MyTask',
  priority: 1,
  project: 'Courses',
  user: 'Mike',
  completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
