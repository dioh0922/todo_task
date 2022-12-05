<template>
	<div>
		<Theme v-bind:list="theme" v-on:select-theme="getTaskList" v-on:add-theme="addTheme"></Theme>
		<Task v-bind:task="task"></Task>
	</div>
</template>

<script>
 import Theme from "./Theme.vue";
 import Task from "./Task.vue";
 import axios from "axios";
 export default {
	mounted(){
		this.getThemeList();
	},
	methods:{
		getThemeList(){
			axios.get("./Task").then(res => {
				this.theme = res.data;
			}).catch(er => {

			});
		},
		addTheme(e){
			axios.post("./Theme", {theme: e}).then(res => {
				if(res.data.result == 1){
					this.getThemeList();
				}else{
					throw new Error(res.data.message);
				}
			}).catch(er => {

			});
		},
		getTaskList(e){
			this.task.theme = e;
			axios.post("./Task", {theme: e}).then(res => {
				this.task.list = res.data;
			}).catch(er => {
			});
		}
	},
 	data(){
 		return {
			theme: [],
			task: {
				list: [],
				theme:""
			}
 		};
 	},
	components:{
		Theme,
		Task
	}
 }
</script>

<style>

</style>
