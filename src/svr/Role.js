const MongoBase = require("./MongoConnect");
class Role extends MongoBase{
	async getAll(theme){
		let result = [];
		const collection = await this.database.collection(theme);

		const tasks = collection.find({});

		await tasks.forEach(item => {
			if(item.role != null){
				result.push(item);
			}
		});
		return result;
	}
}

module.exports = Role;
