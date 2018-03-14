var redis = require("redis");
var client = redis.createClient(6379, "127.0.0.1");

let i = 0;
setInterval(()=> {
  console.log("推送消息：" + i);
  client.publish("chat", i); // client 将 i 发布到 chat 这个频道
  i++;
},1000)