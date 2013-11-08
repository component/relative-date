
/**
 * Dependencies
 */

var _ = require('t');

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

  if (ms == second) return _('one second');
  if (ms < minute) return _('{s} seconds', {s: Math.ceil(ms / second)});

  if (ms == minute) return _('one minute');
  if (ms < hour) return _('{m} minutes', {m: Math.ceil(ms / minute)});

  if (ms == hour) return _('one hour');
  if (ms < day) return _('{h} hours', {h: Math.ceil(ms / hour)});

  if (ms == day) return _('one day');
  if (ms < week) return _('{d} days', {d: Math.ceil(ms / day)});

  if (ms == week) return _('one week');
  if (ms < month) return _('{w} weeks', {w: Math.ceil(ms / week)});

  if (ms == month) return _('one month');
  if (ms < year) return _('{mo} months', {mo: Math.ceil(ms / month)});

  if (ms == year) return _('one year');
  return _('{y} years', {y: Math.round(ms / year)});
}
