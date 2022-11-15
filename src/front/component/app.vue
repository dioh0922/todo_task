<template>
	<div>
		<Form v-bind:list="list"></Form>
	</div>
</template>

<script>
 import Form from "./Form.vue";
 import axios from "axios";
 export default {
	 mounted(){
		 axios.get("./Task").then(res => {
			 console.log(res);
		 }).catch(er => {

		 });
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
