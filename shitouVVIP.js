/*
https://app.qdstt.cn/api/apiClient/index url script-response-body https://raw.githubusercontent.com/1448030937/My2/main/shitouVVIP.js
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/apiClient/index';

if (url.indexOf(vip) != -1) {
	obj.data["vvip"] = "1";
	obj.data["vvip_deadline"] = "1835312949000";
	//obj.data["vip"] = "1";
	body = JSON.stringify(obj);
}

$done({body});
