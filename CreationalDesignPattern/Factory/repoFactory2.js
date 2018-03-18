const repoFactory = function() {
  let repos = {};
  let repoList = [
    {name: 'task', source: './taskRepo'},
    {name: 'user', source: './userRepo'},
    {name: 'project', source: './projectRepo'}
  ];
  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source)();
  });
  return repos;
}

module.exports = repoFactory();
