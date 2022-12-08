<template>
	<div>
		<Theme v-bind:list="theme" v-on:select-theme="getTaskList" v-on:add-theme="addTheme"></Theme>
		<Task v-bind:task="task" v-on:add-task="addTask" v-on:add-log="addLog" v-on:add-ref="addRef"></Task>
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
			axios.get("./Theme").then(res => {
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
			axios.get("./Task/"+e).then(res => {
				this.task.list = res.data;
			}).catch(er => {
			});
		},
		addTask(e){
			let request = e;
			request.theme = this.task.theme;
			axios.put("./Task", request).then(res => {

			}).catch(er => {

			});
		},
		addLog(e){
			let request = e;
			request.theme = this.task.theme;
			console.log(request);
			axios.put("./Log", request).then(res => {

			}).catch(er => {

			});
		},
		addRef(e){
			console.log(e);
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
