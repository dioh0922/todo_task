<template>
	<div>
		{{project}}
		<h1>{{project.title}}</h1>
		<p>タスク内容</p>
		<p>開始：{{project.date}}</p>
		<textarea placeholder="内容"></textarea>
		<table>
			<tr v-for="log in project.log">
				<td>ブレスト1</td>
				<td>{{log}}</td>
			</tr>
			<tr v-for="ref in project.ref">
				<td>2</td>
				<td>{{ref}}</td>
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
 		};
 	}
 }
</script>

<style>

</style>
