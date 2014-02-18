var connect = require('connect');
var wechat = require('wechat');
var config = require('./wx_config');

var app = connect();

function oops(msg, req, res, next) {
  res.reply({
    "type": "text",
    "content": "oops"
  });
}

app.use(connect.logger('dev'))
.use(connect.query())
.use(wechat(config.token)

.text(oops)
.image(oops)
.voice(oops)
.video(oops)
.location(oops)
.link(oops)
.event(function (msg, req, res, next) {
  if (msg.Event === 'CLICK') {
    var key = msg.EventKey;
    var json;
    try {
      json = require('./assets/messages/' + key.toLowerCase());
    } catch(e) {
      oops(msg, req, res, next);
      return;
    }
    res.reply(json);
  }
})
.middlewarify()

);

app.listen(3000, function () {
  console.log("wechat bot listening on 3000");
});
