var requireApp = require('require-root')('app');

var debug = requireApp('debug');
var error = debug.error;
var inspect = debug.inspect;

module.exports = function oopsHandler(msg, req, res, next) {
  error('oops:' + inspect(msg));
  res.reply({
    "type": "text",
    "content": "oops"
  });
};
