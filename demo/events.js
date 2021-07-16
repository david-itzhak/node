const EventEmmiter = require('events');
const emmiter = new EventEmmiter();
emmiter.on('anything', data => {
  console.log('on: anything ', data);
})
emmiter.emit('anything', {a: 1});
emmiter.emit('anything', {b: 2});

setTimeout(() => emmiter.emit('anything', {c: 3}), 1500);

class Dispatcher extends EventEmmiter {
  subscribe(event, callback) {
    console.log('on subscribe');
    this.on(event, callback);
  }

  dispatch(event, data) {
    console.log('on dispatch');
    this.emit(event, data);
  }
}

const disp = new Dispatcher();
disp.subscribe('aa', data => console.log('on aa', data));
disp.dispatch('aa', {aa: 10});
