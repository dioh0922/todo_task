<template>
	<div>
		Vue テンプレート<br>
		{{disp}}
		<ul>
			<li v-for="item in list">{{item.id}}:{{item.label}}</li>
		</ul>
	</div>
</template>

<script>
 export default {
	 props:["list"],
	 mounted(){
		 alert("form");
	 },
 	data(){
 		return {
 			disp: "form"
 		};
 	}
 }
</script>

<style>

</style>
