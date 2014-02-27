var requireApp = require('require-root')('app');
var oops = requireApp('lib/handlers/oops');

var handlers = {
  CLICK: require('./click'),
};

module.exports = function eventHandler(msg, req, res, next) {
  var handler = handlers[msg.Event] || oops;
  handler(msg, req, res, next);
};
