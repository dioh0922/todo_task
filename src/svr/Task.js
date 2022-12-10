const MongoBase = require("./MongoConnect");
const ObjectID = require('mongodb').ObjectID;
class Task extends MongoBase{
	async getAll(theme){
		let result = [];
		const collection = await this.database.collection(theme);

		const tasks = collection.find({});

		await tasks.forEach(item => {
			if(item.title != ""){
				result.push(item);
			}
		});
		return result;
	}
	async addTask(obj){
		let result = false;
		const document = {
			title: obj.title,
			summary: obj.summary,
			date: ""
		};
		await this.database.collection(obj.theme).insertOne(document)
		.then(res => {
			result = true;
		}).catch(er => {
			throw new Error(er);
		});
		return result;
	}
	async updTask(obj){
		let result = false;
		await this.database.collection(obj.theme).updateOne({_id:ObjectID(obj.proj_id)}, {$set:{
			summary: obj.summary,
			//log, refは別で追記していく
		}})
		.then(res => {
			result = true;
		}).catch(er => {
			throw new Error(er);
		});
		return result;
	}
}

module.exports = Task;
