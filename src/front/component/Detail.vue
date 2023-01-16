<template>
	<div class="detail-form">
		<div id="detail-container" class="pure-form">
			<div class="pure-u-1-1">
				<h1>{{project.title}}</h1>
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

			<div class="pure-u-1-2">
				<h2>内容メモ</h2>
				<ul>
					<li v-for="log in project.log">{{log}}</li>
					<li>
						<textarea v-model="log_txt"></textarea>
						<button v-on:click='addLogTxt'>
							<i class="tiny material-icons">edit</i>
						</button>
					</li>
				</ul>
			</div>
			<div class="pure-u-1-2">
				<h2>参考文献</h2>
				<ul>
					<li v-for="ref in project.ref">{{ref.txt}}:{{ref.url}}</li>
					<li>
						<textarea v-model="ref.url"></textarea>
						<textarea v-model="ref.txt"></textarea>
						<button v-on:click='addRefTxt'>
							<i class="tiny material-icons">edit</i>
						</button>
					</li>
				</ul>
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
	border: solid #B4B4B4;
	background-color: #EEEEFF;
}
#detail-container{
	margin:20px;
}
</style>
