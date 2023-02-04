const path = require("path");
const ENV_PATH = path.join(__dirname + "/../../../env", ".env");
require("dotenv").config({path:ENV_PATH});

const https = require("https");
const http = require("http");
const hostname = process.env.NODE_HOST;
const fs = require("fs");
const url = require("url");
const querystring = require('querystring');

const Theme = require("./Theme");
const Task = require("./Task");
const Ref = require("./Ref");
const Log = require("./Log");

const options = {
	key: fs.readFileSync(process.env.HTTPS_KEY),
	cert: fs.readFileSync(process.env.HTTPS_CERT),
};

function successResponseJSON(res, result){
	res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
	res.end(JSON.stringify(result), "utf-8");
}

function errorResponse(res, msg){
	res.writeHead(500, {"Content-Type": "text/html; charset=utf-8"});
	res.end(msg, "utf-8");
}


function server(req, res){
	let url_parts = url.parse(req.url);
	let body = "";
	let req_json = null;
	req.on("data", (chunk) => {
		body += chunk;
	});
	req.on("end", () => {
		if(body != ""){
			req_json = JSON.parse(body);
		}
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
			if(url_parts.pathname.match("/Task")){
				let result = [];
				switch(req.method){
					case "GET":
						let query = decodeURI(url_parts.pathname.replace("/Task/", ""));
						async function getTask(){
							const task = new Task("task");
							try{
								if(query != ""){
									result = await task.getAll(query);
								}
							}catch(e){
								errorResponse(res, e.toString());
							}finally{
								task.close();
							}
							successResponseJSON(res, result);
						}
						getTask().catch(console.dir);

						break;
					case "PUT":
						async function addTask(){
							const task = new Task("task");
							try{
								if(req_json.theme != ""){
									await task.addTask(req_json);
									successResponseJSON(res, {result: 1});
								}
							}catch(e){
								errorResponse(res, e.toString());
							}finally{
								task.close();
							}
						}
						addTask().catch(console.dir);
						break;
					case "POST":
						async function updTask(){
							const task = new Task("task");
							try{
								if(req_json.theme != void 0){
									result = await task.updTask(req_json);
									successResponseJSON(res, {result: 1});
								}
							}catch(e){
								errorResponse(res, "faild update task");
							}finally{
								task.close();
							}
						}
						updTask().catch(console.dir);
						break;
					case "DELETE":
						break;
					default:
						break;

				}
			}else if(url_parts.pathname == "/Theme"){
				switch(req.method){
					case "GET":
						async function getCollection(){
							const theme = new Theme("task");
							try{
								result = await theme.getAll();
							}finally{
								theme.close();
							}
							successResponseJSON(res, result);
						}
						getCollection().catch(console.dir);
						break;
					case "POST":
						async function createTheme(){
							const theme = new Theme("task");
							try{
								await theme.insertTheme(req_json.theme);
								successResponseJSON(res, {result:1});
							}catch(e){
								errorResponse(res, "faild create theme");
							}finally{
								theme.close();
							}
						}
						createTheme().catch(console.dir);
						break;
					default:
						break;
				}
			}else if(url_parts.pathname == "/Log"){
				switch(req.method){
					case "GET":
					case "POST":
					case "DELETE":
						break;
					case "PUT":
						async function addLog(){
							const log = new Log("task");
							try{
								await log.addLog(req_json);
								successResponseJSON(res, {result:1});
							}catch(e){
								errorResponse(res, "faild add log");
							}finally{
								log.close();
							}
						}
						addLog().catch(console.dir);
						break;
					default:
						break;
				}
			}else if(url_parts.pathname == "/Ref"){
				switch(req.method){
					case "GET":
					case "POST":
					case "DELETE":
						break;
					case "PUT":
						async function addRef(){
							const ref = new Ref("task");
							try{
								await ref.addRef(req_json);
								successResponseJSON(res, {result: 1});
							}catch(e){
								errorResponse(res, "faild add ref");
							}finally{
								ref.close();
							}
						}
						addRef().catch(console.dir);
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
							errorResponse(res, 'Sorry, check with the site admin for error: '+err.code+' ..\n');
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
	server(req, res);
});

https_svr.listen(8443, hostname, (response) => {
	//listenは開くときの中身
	console.log("https start");
});

const http_svr = http.createServer(options, (req, res) => {
	server(req, res);
});

http_svr.listen(8080, hostname, (response) => {
	//listenは開くときの中身
	console.log("http start");
});
