const MongoBase = require("./MongoConnect");
class Theme extends MongoBase{
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
