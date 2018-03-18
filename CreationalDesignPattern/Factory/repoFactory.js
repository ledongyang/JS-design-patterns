// repoFactory is a constructor function, its getRepo method will handle different types of repo and return different path.
const RepoFactory = function() {
  this.getRepo = function(repoType) {
    if (repoType === 'task') {
      let taskRepo = require('./taskRepo');
      return taskRepo;
    }
    if (repoType === 'user') {
      let userRepo = require('./userRepo');
      return userRepo;
    }
    if (repoType === 'project') {
      let projectRepo = require('./projectRepo');
      return projectRepo;
    }
  }
}

module.exports = new RepoFactory();
