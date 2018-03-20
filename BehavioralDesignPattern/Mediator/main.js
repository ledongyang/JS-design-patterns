var Task = require('./task');

/** Observers */
var notificationService = function() {
  var message = 'Notifying ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  }
}

var loggingService = function() {
  var message = 'Logging ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  }
}

var auditingService = function() {
  var message = 'Auditing ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  }
}

/** Mediator simple module api */
var mediator = (function(){
  var channels = {};
  // subscribe means provide context and callback function to a channel
  var subscribe = function(channel, context, callback) {
    // create that channel if not found
    if (!channels[channel]) {
      channels[channel] = [];
    }
    channels[channel].push({
      context: context,
      callback: callback
    })
  };
  // publish means find the channel, for each subscriber, call the callback with subscriber's context, as well as additional arguments
  var publish = function(channel) {
    // if not found that channel, return
    if (!channels[channel]) {
      return false;
    }
    var args = [].slice.call(arguments, 1);

    for (let i = 0; i < channels[channel].length; i++) {
      var sub = channels[channel][i];
      sub.callback.apply(sub.context, args);
    }
  }

  return {
    subscribe: subscribe,
    publish: publish
  };
}())

var task1 = new Task({name: 'create a demo for constructors', user: 'Mike'});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
mediator.subscribe('complete', audit, audit.update);

// publish when task1 complete
task1.complete = function() {
  mediator.publish('complete', this);
  Task.prototype.complete.call(this);
}

task1.complete();
