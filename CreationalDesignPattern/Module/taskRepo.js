// Module is a function wrapper returns one or more inner functions. This allows encapsulate detail methods implementation we don't wanna to be exposed to users. This works because of JavaScript closure mechanism.
const repo = function() {

  const get = function(id) {
    console.log('Getting task ' + id);
    return {
      name: 'new task from db.'
    };
  }

  const save = function(task) {
    console.log('Saving task ' + task.name + ' to the db.');
  }

  return {
    get: get,
    save: save
  };

}

module.exports = repo();
