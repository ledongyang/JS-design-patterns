// douglas crockford class-free object-oriented programming using functions
function Task(spec) {
  let {name} = spec,
      completed = false,
      complete = function() {
        console.log('Completing task: ' + name + '!');
        completed = true;
      },
      save = function() {
        console.log('Saving Task: ' + name + '!');
      };
  return Object.freeze({
    completed,
    complete,
    save
  });
}

const myTask = Task({name: 'Legacy Task'});
myTask.complete();
myTask.save();

function UrgentTask(spec) {
  let {name, priority} = spec,
      {complete, save} = Task(spec),
      notify = function() {
        console.log('Notify task ' + name + ' to important people.');
      },
      notifyAndSave = function() {
        notify();
        console.log('Do something special before saving.');
        save();
      }
  return Object.freeze({
    complete,
    notify,
    notifyAndSave
  });
}

const ut = UrgentTask({name: 'This is urgent', priority: 1});

ut.complete();
ut.notifyAndSave();
