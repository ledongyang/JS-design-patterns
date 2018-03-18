// myRepo is a singleton because it is a object cached in node modules. repo function is invoked when it is exported.
const taskHandler = require('./taskHandler');
const myRepo = require('./repo');

myRepo.save('fromMain');
myRepo.save('fromMain');
myRepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
