const path = require("path");
const ENV_PATH = path.join(__dirname + "/../../../env", ".env");
require("dotenv").config({path:ENV_PATH});

const https = require("https");
const http = require("http");
const hostname = "localhost";
const fs = require("fs");
const port = 3000;
const options = {
	key: fs.readFileSync(process.env.HTTPS_KEY),
	cert: fs.readFileSync(process.env.HTTPS_CERT),
};

const https_svr = https.createServer(options, (req, res) => {
	//サーバの基本的なレスポンスはここで整形
	fs.readFile("./index.html", (err, content) => {
		if(err){
			if(err.code == "ENOENT"){
				//404
			}else{
				//読み込めない
				res.writeHead(500);
				res.end('Sorry, check with the site admin for error: '+err.code+' ..\n');
			}
		}else{
			//jsもhtmlが出てしまう
			if(req.url.match(/\/.*\.js/)){
				let src = req.url.lastIndexOf("/");
				console.log(src);
				console.log(req.url);
				//readFileで採ってきてtext/plainで返す
			}
			res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
			res.end(content, "utf-8");
		}
	});
});

https_svr.listen(8443, hostname, (response) => {
	//listenは開くときの中身
	console.log("https start");
});

const http_svr = http.createServer(options, (req, res) => {
	//サーバの基本的なレスポンスはここで整形
	fs.readFile("./index.html", (err, content) => {
		if(err){
			if(err.code == "ENOENT"){
				//404
			}else{
				//読み込めない
				res.writeHead(500);
				res.end('Sorry, check with the site admin for error: '+err.code+' ..\n');
			}
		}else{
			res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
			res.end(content, "utf-8");
		}
	});
});

http_svr.listen(8080, hostname, (response) => {
	//listenは開くときの中身
	console.log("http start");
});
