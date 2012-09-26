
/**
 * Expose `relative`.
 */

module.exports = relative;

/**
 * Constants.
 */

var second = 1000;
var minute = 60 * second;
var hour = 60 * minute;
var day = 24 * hour;
var week = 7 * day;
var year = day * 365;
var month = year / 12;

/**
 * Return `date` in words relative to `other`
 * which defaults to now.
 *
 * @param {Date} date
 * @param {Date} other
 * @return {String}
 * @api public
 */

function relative(date, other) {
  other = other || new Date;
  var ms = Math.abs(other - date);

  if (ms < second) return '';

  if (ms == second) return 'one second';
  if (ms < minute) return Math.ceil(ms / second) + ' seconds';

  if (ms == minute) return 'one minute';
  if (ms < hour) return Math.ceil(ms / minute) + ' minutes';

  if (ms == hour) return 'one hour';
  if (ms < day) return Math.ceil(ms / hour) + ' hours';

  if (ms == day) return 'one day';
  if (ms < week) return Math.ceil(ms / day) + ' days';

  if (ms == week) return 'one week';
  if (ms < month) return Math.ceil(ms / week) + ' weeks';

  if (ms == month) return 'one month';
  if (ms < year) return Math.ceil(ms / month) + ' months';

  if (ms == year) return 'one year';
  return Math.round(ms / year) + ' years';
}
