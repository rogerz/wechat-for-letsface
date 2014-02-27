var requireApp = require('require-root')('app');
var oops = requireApp('lib/handlers/oops');

var validateReply = exports.validateReply = function validateReply(reply, passed, failed) {
  // TODO: validate the reply
  return passed();
};

exports.createHandler = function createHandler (reply) {
  if (typeof reply === 'function') {
    return reply;
  } else {
    return function createdHandler (msg, req, res, next) {
      validateReply(reply,
                    function passed() {res.reply(reply);},
                    function failed() {oops(msg, req, res, next);}
                   );
    };
  }
};
