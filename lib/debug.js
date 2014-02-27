var debug = require('debug');
var eyes = require('eyes');

module.exports = {
  error: debug('wechat-for-letsface:error'),
  log: debug('wechat-for-letsface:log'),
  inspect: eyes.inspector({stream: null})
};
