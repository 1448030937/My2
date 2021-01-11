/*
https://app.qdstt.cn/api/apiClient/index url script-response-body https://raw.githubusercontent.com/1448030937/My2/main/shitouVVIP.js
*/


var body = $response.body;

var obj = JSON.parse(body);

obj.data["vvip"] = "1";
obj.data["vvip_deadline"] = "1835312949000";
body = JSON.stringify(obj);

$done({body});
