const repo = function() {

  const get = function(id) {
    console.log('Getting project ' + id);
    return {
      name: 'new project'
    };
  }

  const save = function(project) {
    console.log('Saving project ' + project.name + ' to the db.');
  }

  return {
    get: get,
    save: save
  };

}

module.exports = repo;
