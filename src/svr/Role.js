const MongoBase = require("./MongoConnect");
class Role extends MongoBase{
	async getAll(theme){
		let result = [];
		const collection = await this.database.collection(theme);

		const tasks = collection.find({});

		await tasks.forEach(item => {
			if(item.todo != null){
				result.push(item.todo);
			}
		});
		return result;
	}
}

module.exports = Role;
