<template>
	<div>
		<Form v-bind:list="list" v-on:select-theme="getTaskList"></Form>
	</div>
</template>

<script>
 import Form from "./Form.vue";
 import axios from "axios";
 export default {
	mounted(){
	 axios.get("./Task").then(res => {
		 this.list = res.data;
	 }).catch(er => {

	 });
	},
	methods:{
		 getTaskList(e){
			 axios.post("./Task", {theme: e}).then(res => {

			 }).catch(er => {

			 });
		 }
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
