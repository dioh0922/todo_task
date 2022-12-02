const MongoBase = require("./MongoConnect");
class Career extends MongoBase{
	async getAll(){
		let result = [];
		const col = await this.database.listCollections().toArray();
		col.forEach(item => {
			result.push(item.name);
		});
		return result;
	}
}

module.exports = Career;
