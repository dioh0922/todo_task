const MongoBase = require("./MongoConnect");
class Task extends MongoBase{
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
	async addTask(obj){
		let result = false;
		const document = {
			todo:{
				title: obj.title,
				summary: obj.summary,
				date: ""
			}
		};
		await this.database.collection(obj.theme).insertOne(document)
		.then(res => {
			result = true;
		}).catch(er => {
			throw new Error(er);
		});
		return result;
	}
}

module.exports = Task;
