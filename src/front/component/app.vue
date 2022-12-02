<template>
	<div>
		<Career v-bind:list="career" v-on:select-theme="getTaskList"></Career>
		<Role v-bind:role="role"></Role>
	</div>
</template>

<script>
 import Career from "./Career.vue";
 import Role from "./Role.vue";
 import axios from "axios";
 export default {
	mounted(){
	 axios.get("./Career").then(res => {
		 this.career = res.data;
	 }).catch(er => {

	 });
	},
	methods:{
		 getTaskList(e){
			 this.role.theme = e;
			 axios.post("./Career", {theme: e}).then(res => {
				 this.role.list = res.data;
			 }).catch(er => {

			 });
		 }
	},
 	data(){
 		return {
			career: [],
			role: {
				list: [],
				theme:""
			}
 		};
 	},
	components:{
		Career,
		Role
	}
 }
</script>

<style>

</style>
