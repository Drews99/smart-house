import { Device } from "./device";

export class Multicooker extends Device {
  constructor(name) {
    super(name);
    this._tasklist = ["task1", "task2", "task3", "task4"];
    this._task = null; //a task for device
    this._currentTask = 0; //a task that is currently viewed in task list
    this._temperature = 100;
  }

  get tasklist() {
    return this._taskList;
  }

  get task() {
    if (this._task != null) {
      return this._task;
    }
  }

  setUpTask() {
    this._state === true ? this._task = this._tasklist[this._currentTask] : this._task = this._tasklist[0];
  }

  get currentTask() {
    return this._tasklist[this._currentTask];
  }

  nextTask() {
    return this._state === true &&
      this._currentTask > this._tasklist.length - 1
      ? this._currentTask
      : ++this._currentTask;
  }

  previousTask() {
    return this._state === true && this._currentTask <= 0
      ? this._currentTask
      : --this._currentTask;
  }

  get temperature() {
    return this._temperature;
  }

  increaseTemperature() {
    return this._state === true && this._temperature >= 100
      ? this._temperature
      : ++this._temperature;
  }
  decreaseTemperature() {
    return this._state === true && this._temperature <= 0
      ? this._temperature
      : --this._temperature;
  }

  async setUpTaskWithTimer(str){
    await super.timer(str, true);
    this._task = this._tasklist[this._currentTask];
    console.log("task is set");
  }
}
