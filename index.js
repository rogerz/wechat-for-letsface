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
.event(require('./lib/handlers/event'))
.middlewarify()

);

app.listen(3000, function listenCb() {
  console.log("wechat bot listening on 3000");
});
