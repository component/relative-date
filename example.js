
/**
 * Module dependencies.
 */

var relative = require('./');

var date = new Date(Date.now() - 60000);
console.log(relative(date) + ' ago');

var date = new Date(Date.now() - 1000*60*60*2);
console.log(relative(date) + ' ago');

var date = new Date(Date.now() + 5 * 60000);
console.log(relative(date) + ' from now');
