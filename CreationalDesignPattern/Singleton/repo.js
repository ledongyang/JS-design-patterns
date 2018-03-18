const repo = function() {
  let called = 0;

  const save = function(task) {
    called++;
    console.log('Saving task ' + task + ' Called ' + called + ' times.');
  }

  console.log('newing up task repo.')
  return {
    save: save
  };

}

module.exports = repo();
