<template>
	<div>
		<Form v-bind:list="list"></Form>
	</div>
</template>

<script>
 import Form from "./Form.vue";
 export default {
	 mounted(){
		 this.list = [
			 {id:0, label:"test"},{id:1, label:"test1"}
		 ];
	 },
 	data(){
 		return {
 			list: []
 		};
 	},
	components:{
		Form
	}
 }
</script>

<style>

</style>
