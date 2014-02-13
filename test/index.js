var expect = require('chai').expect,
    wechatForLetsface = require('..');

describe('wechat-for-letsface', function() {
  it('should say hello', function(done) {
    expect(wechatForLetsface()).to.equal('Hello, world');
    done();
  });
});
