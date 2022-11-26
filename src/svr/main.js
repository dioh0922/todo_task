const path = require("path");
const ENV_PATH = path.join(__dirname + "/../../../env", ".env");
require("dotenv").config({path:ENV_PATH});

const https = require("https");
const http = require("http");
const hostname = "localhost";
const fs = require("fs");
const url = require("url");
const querystring = require('querystring');
const options = {
	key: fs.readFileSync(process.env.HTTPS_KEY),
	cert: fs.readFileSync(process.env.HTTPS_CERT),
};


function server_func(req, res){
	let url_parts = url.parse(req.url);
	let body = "";
	let req_json = null;
	req.on("data", (chunk) => {
		body += chunk;
	});
	req.on("end", () => {
		req_json = JSON.parse(body);
		if(url_parts.pathname.match(/\/.*\.js/)){
			let resource = req.url.substr(req.url.lastIndexOf("/"));
			fs.readFile(__dirname+"/../front/dist"+resource, (err, content) => {
				if(!err){
					res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
					res.end(content, "utf-8");
				}else{
					res.writeHead(404);
				}
			});
			//readFileで採ってきてtext/plainで返す
		}else{
			if(url_parts.pathname == "/Task"){
				let result = [];
				switch(req.method){
					case "GET":
						async function getCollection(){
							const Theme = require("./Theme");
							const theme = new Theme("task");
							try{
								result = await theme.getAll();
							}finally{
								theme.close();
							}
							res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
							res.end(JSON.stringify(result), "utf-8");
						}
						getCollection().catch(console.dir);
						break;
					case "POST":
						async function getTask(){
							const Task = require("./Task");
							const task = new Task("task");
							try{
								console.log(req_json.theme);
								if(req_json.theme != void 0){
									result = await task.getAll(req_json.theme);
								}
							}finally{
								task.close();
							}
							res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
							res.end(JSON.stringify(result), "utf-8");
						}
						getTask().catch(console.dir);
						break;
					default:
						break;

				}

			}else{
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
						res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
						res.end(content, "utf-8");
					}
				});
			}
		}
	});

}

const https_svr = https.createServer(options, (req, res) => {
	server_func(req, res);
});

https_svr.listen(8443, hostname, (response) => {
	//listenは開くときの中身
	console.log("https start");
});

const http_svr = http.createServer(options, (req, res) => {
	server_func(req, res);
});

http_svr.listen(8080, hostname, (response) => {
	//listenは開くときの中身
	console.log("http start");
});
