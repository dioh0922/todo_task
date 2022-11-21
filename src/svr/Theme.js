const mongodb = require("mongodb");

class Theme{
	client = null;
	database = null;
	constructor(){
		this.connect("task");
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
	async getAll(){
		let result = [];
		const col = await this.database.listCollections().toArray();
		col.forEach(item => {
			result.push(item.name);
		});
		return result;
	}
}

module.exports = Theme;
