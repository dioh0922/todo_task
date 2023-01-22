<template>
	<div class="content">
		<Theme v-bind:list="theme" v-on:select-theme="getTaskList" v-on:add-theme="addTheme"></Theme>
		<Task v-bind:task="task" v-bind:status="status" v-bind:obj="edit_obj"
		v-on:add-task="addTask" v-on:add-log="addLog" v-on:add-ref="addRef"
		v-on:edit-summary="editSummary" v-on:open-task="openTask"
		></Task>
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
		resetTaskList(){
			this.getTaskList(this.task.theme);
		},
		getTaskList(e){
			this.status.disp = false;
			this.task.theme = e;
			let query = encodeURI(e);
			axios.get("./Task/"+query).then(res => {
				this.task.list = res.data;
			}).catch(er => {
			});
		},
		addTask(e){
			let request = e;
			request.theme = this.task.theme;
			axios.put("./Task", request).then(res => {
				this.resetTaskList();
			}).catch(er => {

			});
		},
		addLog(e){
			this.edit_obj.log.push(e.log);
			let request = e;
			request.theme = this.task.theme;
			axios.put("./Log", request).then(res => {
				if(res.data.result == 1){
					this.resetTaskList();
				}
			}).catch(er => {

			});
		},
		addRef(e){
			this.edit_obj.ref.push(e.ref);
			let request = e;
			request.theme = this.task.theme;
			axios.put("./Ref", request).then(res => {
				if(res.data.result == 1){
					this.resetTaskList();
				}
			}).catch(er => {

			});
		},
		editSummary(e){
			let request = e;
			request.theme = this.task.theme;
			axios.post("./Task",request ).then(res => {
				if(res.data.result == 1){

				}
			}).catch(er => {

			});
		},
		openTask(e){
			this.edit_obj = e;
			this.status.disp = true;
		}
	},
 	data(){
 		return {
			theme: [],
			edit_obj:{
				log:[],
				ref:[]
			},
			status:{
				disp: false
			},
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

<style scoped>
 .content{
	 display: block;
 }
</style>
