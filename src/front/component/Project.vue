<template>
	<div>
		<h1>タイトル</h1>
		<p>タスク内容</p>
		<p>記録日</p>
		<textarea placeholder="内容"></textarea>
		<table>
			<tr>
				<td>ブレスト1</td>
				<td>内容</td>
			</tr>
			<tr>
				<td>2</td>
				<td>内容</td>
			</tr>
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
