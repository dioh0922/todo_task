const MongoBase = require("./MongoConnect");
class Log extends MongoBase{
	async addLog(obj){
		let result = false;
		await this.database.collection(obj.theme).updateOne({_id:ObjectID(obj.proj_id)},{$push:{log:obj.log}})
		.then(res => {
			result = true;
		}).catch(er => {
			throw new Error(er);
		});
		return result;
	}
}

module.exports = Log;
