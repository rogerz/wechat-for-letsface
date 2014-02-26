var connect = require('connect');
var wechat = require('wechat');
var wxConfig = require('./wx_config');
var config = require('./config');
var util = require('util');

var api = new wechat.API(wxConfig.appid, wxConfig.secret);
var app = connect();

function oops(msg, req, res, next) {
  res.reply({
    "type": "text",
    "content": "oops"
  });
}

app.use(connect.logger('dev'))
.use(config.assets, connect.static(__dirname + config.assets))
.use(connect.query())
.use(wechat(wxConfig.token)

.text(oops)
.image(oops)
.voice(oops)
.video(oops)
.location(oops)
.link(oops)
.event(function eventHandler(msg, req, res, next) {
  var replyOops = function () {
    return oops(msg, req, res, next);
  };

  if (msg.Event === 'CLICK') {
    var key = msg.EventKey;
    var json;

    if (key === 'WHO_AM_I') {
      api.getUser(msg.FromUserName, function getUserCb(err, result) {
        if (err) {
          return replyOops();
        } else {
          return res.reply({
            "title": result.nickname,
            "description": util.format('%s,%s,%s',
                                       result.country,
                                       result.province,
                                       result.city
                                      ),
            'picurl': result.headimgurl
          });
        }
      });
    }

    try {
      return res.reply(require('.' + config.assets + '/messages/' + key.toLowerCase()));
    } catch(e) {
      return replyOops();
    }
  }
})
.middlewarify()

);

app.listen(3000, function listenCb() {
  console.log("wechat bot listening on 3000");
});
