const repo = function() {

  const get = function(id) {
    console.log('Getting user ' + id);
    return {
      name: 'mike'
    };
  }

  const save = function(user) {
    console.log('Saving user ' + user.name + ' to the db.');
  }

  return {
    get: get,
    save: save
  };

}

module.exports = repo;
