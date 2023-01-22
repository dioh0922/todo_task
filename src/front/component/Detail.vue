<template>
	<div class="detail-form pure-u-18-24">
		<div id="detail-container" class="pure-form">
			<div class="pure-u-1-1">
				<h2>{{project.title}}</h2>
				<p>タスク内容</p>
				<p>開始：{{project.date}}</p>
				<div class="pure-u-1-1">
					<textarea cols="40" rows="10" placeholder="内容" v-bind:value="project.summary" v-on:change="editSummary"></textarea>
				</div>
				<div>
					<button v-on:click="saveSummary">
						<i class="tiny material-icons">edit</i>
					</button>
				</div>
			</div>

			<div class="pure-u-1-1">

				<div class="pure-u-10-24 detail-txt">
					<div class="detail-form-area">
						<h2>内容メモ</h2>
						<ul>
							<li class="log-area" v-for="log in project.log">{{log}}</li>
							<li>
								<textarea class="txt-form" v-model="log_txt"></textarea>
								<button v-on:click='addLogTxt'>
									<i class="tiny material-icons">edit</i>
								</button>
							</li>
						</ul>
					</div>
				</div>

				<div class="pure-u-10-24">
					<div class="">
						<h2 class="detail-form-area">参考文献</h2>
						<table class="pure-table">
							<thead>
								<tr>
									<th>内容</th>
									<th>URL</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="ref in project.ref">
									<td><div class="ref-disp">{{ref.txt}}</div></td>
									<td><div class="ref-disp">{{ref.url}}</div></td>
								</tr>
								<tr>
									<td><input class="txt-form" type="text" v-model="ref.txt"/></td>
									<td><input class="txt-form" type="text" v-model="ref.url"/></td>
								</tr>
								<tr>
									<td>
										<button v-on:click='addRefTxt'>
											<i class="tiny material-icons">edit</i>
										</button>
									</td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
 export default {
	 props:["project"],
	 methods:{
		 editSummary(e){
			 this.summary = e.target.value;
		 },
		 saveSummary(){
			 this.$emit("edit-summary", {proj_id: this.project._id, summary: this.summary});
		 },
		 addLogTxt(){
			 this.$emit("add-log", {proj_id:this.project._id, log: this.log_txt});
			 this.log_txt = "";
		 },
		 addRefTxt(){
			 this.$emit("add-ref", {proj_id:this.project._id, ref: this.ref});
			 this.ref_txt = "";
		 }
	 },
 	data(){
 		return {
			summary:"",
			log_txt:"",
			ref:{
				url:"",
				txt:""
			}
 		};
 	}
 }
</script>

<style scoped>
.detail-form{
	overflow: auto;
	border: solid #B4B4B4;
	background-color: #EEEEFF;
}
#detail-container{
	margin:20px;
}
.detail-txt{
	border: dashed #C4C4C4;
	margin: 1%;
}
.txt-form{
}
.detail-form-area{
	margin: 1%;
}
.log-area{
	margin-bottom: 10px;
}
.ref-disp{
	width:100%;
	inline-size: 100%;
	overflow-wrap: break-word;
	word-break: break-all
}
</style>
