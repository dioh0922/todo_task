<template>
	<div>
		{{project}}
		<h1>{{project.title}}</h1>
		<p>タスク内容</p>
		<p>開始：{{project.date}}</p>
		<textarea placeholder="内容" v-bind:value="project.summary" v-on:change="editSummary"></textarea>
		<button v-on:click="saveSummary">+</button>
		<table >
			<tr v-for="log in project.log">
				<td>ブレスト1</td>
				<td>{{log}}</td>
			</tr>
			<tr>
				<td><textarea v-model="log_txt"></textarea></td>
				<td><button v-on:click='addLogTxt'>+</button></td>
			</tr>
		</table>
		\\\\\\\\
		<table >
			<tr v-for="ref in project.ref">
				<td>2</td>
				<td>{{ref}}</td>
			</tr>
			<tr>
				<td><textarea v-model="ref_txt"></textarea></td>
				<td><button v-on:click='addRefTxt'>+</button></td>
			</tr>
		</table>
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
			 this.$emit("add-ref", {proj_id:this.project._id, ref: this.ref_txt});
			 this.ref_txt = "";
		 }
	 },
 	data(){
 		return {
			summary:"",
			log_txt:"",
			ref_txt:"",
 		};
 	}
 }
</script>

<style>

</style>
