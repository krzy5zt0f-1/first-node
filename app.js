//adding the exports from logger.js
const log = require('./logger.js');
// require build in path module
const path = require('path');
//require build in OS module
const os = require('os');
// require buuild in file system module
const file = require('fs');
// require events module
const EventEmitter = require('events');
 // console.log(), setTimeout(), clearTiemout(), setInterval(), clearInterval() - global

 //in node, there is no window, instead you can access it via global,
//to get thing defined in a console,

console.log(module);

console.log(log);
log('message');
// in node every file is a module, anything stated in each file is its scope


//use of parse from path module
var pathObj = path.parse(__filename);

console.log(pathObj);

//use of os methods
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}, Free Memory: ${freeMemory}`);

//use of fs module use of synchorounous version, for simplicity, do not use irl

 const files = file.readdirSync('./');
 console.log(files);

 //use of fs module
 const f = file.readdir('./', function(err, files){
   if (err) console.log('Error', err);
   else console.log('Result', files);
 })

const emitter = new EventEmitter();
 // Registering an event
 emitter.on('messageLogged', function(arg) {
   console.log('Listener called', arg);
 });

 console.log('message');

//
