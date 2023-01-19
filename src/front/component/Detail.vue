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

			<div class="pure-u-1-3 detail-txt">
				<div class="detail-form-area">
					<h2>内容メモ</h2>
					<ul>
						<li v-for="log in project.log">{{log}}</li>
						<li>
							<textarea class="txt-form" v-model="log_txt"></textarea>
							<button v-on:click='addLogTxt'>
								<i class="tiny material-icons">edit</i>
							</button>
						</li>
					</ul>
				</div>
			</div>

			<div class="pure-u-1-3 detail-txt">
				<div class="detail-form-area">
					<h2>参考文献</h2>
					<ul>
						<li v-for="ref in project.ref">{{ref.txt}}:{{ref.url}}</li>
					</ul>
					<div class="">
						<div>
							内容：<input class="txt-form" type="text" v-model="ref.txt"/>
						</div>
						<div>
						リンク：<input class="txt-form" type="text" v-model="ref.url"/>
						</div>
						<div class="pure-u-1-2">
							<button v-on:click='addRefTxt'>
								<i class="tiny material-icons">edit</i>
							</button>
						</div>
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
	width: 60%;
	border: solid #B4B4B4;
	background-color: #EEEEFF;
}
#detail-container{
	margin:20px;
}
.detail-txt{
	border: dashed #C4C4C4;
	margin: 5%;
}
.txt-form{
	width: 80%;
}
.detail-form-area{
	margin: 10%;
}
</style>
