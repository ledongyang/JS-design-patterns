var repo = {
  tasks: {},
  commands: [],
  get: function(id) {
    console.log('Getting task ' + id);
    return {
      name: 'new task from db'
    }
  },
  save: function(task) {
    console.log('Saving ' + task.name + ' to db!');
    // save task to tasks
    repo.tasks[task.id] = task;
  },
  // replay is going to re-execute all of the commands, if we needed.
  replay: function() {
    for (let i = 0; i < repo.commands.length; i++) {
      var command = repo.commands[i];
      repo.executeNoLog(command.name, command.obj);
    }
  }
}

// execute command without store the log
repo.executeNoLog = function(name) {
  var args = [].slice.call(arguments, 1);
  // if there is executable function
  if (repo[name] && typeof repo[name] === 'function') {
    return repo[name].apply(repo, args);
  }
  return false;
}

// execute doesn't care what function we want to execute, it just execute it whatever we provided
repo.execute = function(name) {
  var args = [].slice.call(arguments, 1);

  // store commands to repo, so that we can re-execute them if we need to
  repo.commands.push({
    name: name,
    obj: args[0]
  })

  // if there is executable function
  if (repo[name] && typeof repo[name] === 'function') {
    return repo[name].apply(repo, args);
  }
  return false;
}

repo.execute('save', {
  id: 1,
  name: 'Task 1',
  completed: false
})

repo.execute('save', {
  id: 2,
  name: 'Task 2',
  completed: false
})

repo.execute('save', {
  id: 3,
  name: 'Task 3',
  completed: false
})

repo.execute('save', {
  id: 4,
  name: 'Task 4',
  completed: false
})

console.log(repo.tasks);

// intentionally delete all tasks
repo.tasks = {}
console.log(repo.tasks);

// re-execute all the commands
repo.replay();
console.log(repo.tasks);
