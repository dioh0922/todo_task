const path = require("path");
const ENV_PATH = path.join(__dirname + "/../../../env", ".env");
require("dotenv").config({path:ENV_PATH});

const https = require("https");
const http = require("http");
const hostname = "localhost";
const fs = require("fs");
const options = {
	key: fs.readFileSync(process.env.HTTPS_KEY),
	cert: fs.readFileSync(process.env.HTTPS_CERT),
};


function server_func(req, res){
	if(req.url.match(/\/.*\.js/)){
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
		if(req.url.match(/Task/)){
			const mongodb = require("mongodb");
			const Client = new mongodb.MongoClient("mongodb://localhost:27017");
			let str = "init \n";
			async function run(){
				try{

					const database = Client.db();
					const collection = database.collections((e, r) => {
						console.log(e);
						console.log(r);
					});
					/*
					for await (const item of collection){
						console.log(item);
					}
					*/
					Client.close();
				}finally{
				}
			}
			run().catch(console.dir);

			/*
			Client.connect("mongodb://localhost:27017/task", (err, db) => {
				if(!err){
					const collection = db.collection("test").find().toArray((find_err, find_res)=>{
						console.log(find_err);
						console.log(find_res);
					});
				}
				db.close();
			});
			*/
			str += "end\n";
			res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
			res.end(str, "utf-8");
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
