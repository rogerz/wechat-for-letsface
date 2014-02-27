var requireApp = requrie('require-root')('app');

var oops = requireApp('lib/handlers/oops');
var utils = requireApp('lib/utils');

module.exports = function clickHandler(msg, req, res, next) {
  var key = msg.EventKey;
  try {
    reply = require('./' + key);
  } catch (e) {
    oops(msg, req, res, next);
  }

  utils.createHandler(reply)(msg, req, res, next);
};
