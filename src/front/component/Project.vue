<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>言語/フレームワーク</th>
					<th>概要</th>
					<th>担当内容</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in project">
					<td><p v-for="tech in item.lang">{{tech}}</p></td>
					<td>{{item.detail}}</td>
					<td>{{item.task}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
 export default {
	 props:["project"],
	 mounted(){
		 //alert("form");
	 },
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
