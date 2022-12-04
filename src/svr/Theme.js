const MongoBase = require("./MongoConnect");
class Theme extends MongoBase{
	async getAll(){
		let result = [];
		const col = await this.database.listCollections().toArray();
		col.forEach(item =>  {
			//career_obj.role = roles.filter(el => el.company_id == item._id);
			result.push(item.name);
		});
		return result;
	}
	async insertTheme(theme){
		//コールバックするとawaitで待てない
		await this.database.createCollection(theme);
	}
}

module.exports = Theme;
