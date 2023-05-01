import { makeAutoObservable } from 'mobx';

class Counter {
  count = 0;
  timer = 0;
  constructor() {
    makeAutoObservable(this);
  }

  // Actions
  increment() {
    this.count = this.count + 1;
    console.log(`increment ${this.count}`);
  }

  decrement() {
    this.count = this.count - 1;
    console.log(`decrement ${this.count}`);
  }

  // Computed - вычисляемые значения
  get total() {
    return `Count + timer ${this.timer + this.count}`;
  }
}

const counter = new Counter();

export default counter;
