//adding the exports from logger.js
const Logger = require('./logger.js');


const logger = new Logger();

// Registering an listener
logger.on('messageLogged', function(arg) {
  console.log('Listener called', arg);
});
logger.log('message');

//
