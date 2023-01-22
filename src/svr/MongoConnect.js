const mongodb = require("mongodb");

class MongoBase{
	client = null;
	database = null;
	constructor(db_name){
		this.connect(db_name);
	}
	connect(db_name){
		this.client = new mongodb.MongoClient("mongodb://localhost:27017");
		this.client.connect();
		this.database = this.client.db(db_name);
	}
	close(){
		if(this.client != null){
			this.client.close();
			this.client = null;
		}
	}
}

module.exports = MongoBase;
