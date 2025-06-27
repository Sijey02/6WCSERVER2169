var myLogModule = require('./PRELIM/utility/log.js');

// myLogModule.warning('Warning node not found..');
// myLogModule.error('Error: Node encountered an error.. ');
// myLogModule.info('Node is running..');

// //Message.js
// module.exports = 'Hello World!';

// or exports 'Hello World';

// var msg = require('./PRELIM/utility/Message.js');
// console.log(msg);

// var msg = require('./PRELIM/utility/Message.js');
// console.log(msg.SimpleMessage);

// var person = require('./PRELIM/utility/data.js');
// console.log(person.firstName + ' ' + person.lastName);

var msg = require('./PRELIM/utility/log.js');
msg('Hello World');