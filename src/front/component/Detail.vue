<template>
	<div>
		{{project}}
		<h1>{{project.title}}</h1>
		<p>タスク内容</p>
		<p>開始：{{project.date}}</p>
		<textarea placeholder="内容"></textarea>
		<table >
			<tr v-for="log in project.log">
				<td>ブレスト1</td>
				<td>{{log}}</td>
			</tr>
			<tr>
				<td><textarea v-model="log_txt"></textarea></td>
				<td><button v-on:click='$emit("add-log", {proj_id:this.project._id, log: this.log_txt})'>+</button></td>
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
				<td><button v-on:click='$emit("add-ref", {proj_id:this.project._id, ref: this.ref_txt})'>+</button></td>
			</tr>
		</table>
	</div>
</template>

<script>
 export default {
	 props:["project"],
	 methods:{
	 },
 	data(){
 		return {
			log_txt:"",
			ref_txt:"",
 		};
 	}
 }
</script>

<style>

</style>
