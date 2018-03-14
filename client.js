var redis = require("redis");
var client = redis.createClient(6379, "127.0.0.1");

client.on("ready", function() {
  // 订阅消息
  client.subscribe("chat");
  // client.subscribe("chat1");
  console.log("订阅成功。");
});

client.on("error", function(error) {
  console.log("Redis Error " + error);
});

// 监听订阅成功事件
client.on("subscribe", function(channel, count) {
  console.log(
    "client subscribed to " + channel + "," + count + "total subscriptions"
  );
});

// 收到消息后执行回调，message 是 redis 发布的消息
client.on("message", function(channel, message) {
  console.log("我接收到信息了：" + message);
});

// 监听取消订阅事件
client.on("unsubscribe", function(channel, count) {
  console.log(
    "client unsubscribed from" + channel + ", " + count + " total subscriptions"
  );
});
