console.log(__filename);
console.log(__dirname);
const EventEmitter = require('events');
//use of events module which is a class
const emitter = new EventEmitter();
var url = 'http://fakrlogger.io/log';

function log(message) {
  //as if sending HTTP request;
  console.log(message);
  // Raised an event
  emitter.emit('messageLogged', {id: 1, url: 'http://'});
}

// adding the method log() to exports to be used in other modules

module.exports = log;
