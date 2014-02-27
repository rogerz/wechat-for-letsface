var requireApp = require('require-root')('app');

var api = requireApp('lib/api');

var debug = requireApp('debug');
var error = debug.error;
var log = debug.log;
var inspect = debug.inspect;

module.exports = function whoAmI(msg, next) {
  api.getUser(msg.FromUserName, function getUserCb(err, result) {
    if (err) {
      error('get user error:' + inspect(err));
    } else {
      log('got user:' + inspect(result));
      next({
          'title': result.nickname,
          'description': util.format('%s,%s,%s',
                                     result.country,
                                     result.province,
                                     result.city
                                    ),
          'picurl': result.headimgurl
      });
    }
  });
};
