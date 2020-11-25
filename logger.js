
const EventEmitter = require('events');
//use of events module which is a class

var url = 'http://fakrlogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    //as if sending HTTP request;
    console.log(message);
    // Raised an event
    this.emit('messageLogged', {id: 1, url: 'http://'});
  }
}


// adding the method log() to exports to be used in other modules

module.exports = Logger;
