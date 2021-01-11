/*
https://*.mkzcdn.com url script-response-body https://raw.githubusercontent.com/1448030937/My2/main/mankezhan.js
*/
var body = $response.body;
var obj = JSON.parse(body);
var url = $requert.url;

const vip = '/user/funds/info';
const buy = '/chapter/buy/add';
cont read = '/chapter/read/check';

if (url.indexOf(vip) != -1) {
	      obj.data["is_vip"] = "1";
	      obj.data["vip_end_time"] = "1713188017";
	      obj.data["gold"] = "8888";
	      body = JSON.stringify(obj);
}

if (url.indexOf(buy) != -1) {
	      obj["code"] = "200";
	      body = JSON.stringify(obj);
}

if (url.indexOf(read) != -1) {
	      obj["code"] = "200";
	      obj["buy_status"] = "1";
	      body = JSON.stringify(obj);
}
