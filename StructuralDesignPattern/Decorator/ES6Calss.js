// parent class
class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  complete() {
    console.log('Completing task: ' + this.name + '!');
    this.completed = true;
  }

  save() {
    console.log('Saving Task: ' + this.name + '!');
  }
}

const myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// subclass
class UrgentTask extends Task{
  constructor(name, priority) {
    super(name);
    this.priority = priority;
  }
  // own method
  notify() {
    console.log('Notify ' + this.name + ' to important people!');
  }
  // override parent method
  save() {
    this.notify();
    console.log('Do something special before saving!');
    super.save();
  }
}

const urgentTask = new UrgentTask('Urgent Task', 1);
urgentTask.complete();
urgentTask.save();
