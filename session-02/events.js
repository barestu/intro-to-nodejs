const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('event', () => {
  console.log('halo, selamat datang');
});

myEmitter.emit('event');
myEmitter.emit('event');

myEmitter.on('error', err => {
  console.error('Telah terjadi error');
});

myEmitter.emit('error', new Error('Whops'));
