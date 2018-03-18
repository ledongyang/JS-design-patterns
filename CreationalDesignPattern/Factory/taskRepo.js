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

  console.log('newing up task repo.')
  return {
    get: get,
    save: save
  };

}

module.exports = repo;
