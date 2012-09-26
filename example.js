
/**
 * Module dependencies.
 */

var relative = require('./');

var date = new Date(Date.now() - 60000);
console.log(relative(date) + ' ago');

var date = new Date(Date.now() + 5 * 60000);
console.log(relative(date) + ' from now');