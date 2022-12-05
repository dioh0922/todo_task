<template>
	<div>
		<input type="button" value="プロジェクト追加" v-on:click="save"/>
		<input type="text" v-model="theme_title"/>
	</div>
</template>

<script>
 export default {
	 methods:{
		 save(){
			 this.$emit("add-theme", this.theme_title);
			 this.theme_title = "";
		 }
	 },
 	data(){
 		return {
			theme_title:""
 		};
 	}
 }
</script>

<style>

</style>
