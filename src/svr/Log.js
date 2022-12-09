const MongoBase = require("./MongoConnect");
const ObjectID = require('mongodb').ObjectID;
class Log extends MongoBase{
	async addLog(obj){
		let result = false;
		let collection = await this.database.collection(obj.theme);
		await collection.updateOne({_id:ObjectID(obj.proj_id)},{$push:{log:obj.log}})
		.then(res => {
			result = true;
		}).catch(er => {
			throw new Error(er);
		});
		return result;
	}
}

module.exports = Log;
