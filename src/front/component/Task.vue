<template>
	<div>
		{{task.theme}}
		<div v-show="!show">
			<table>
				<thead>
					<th>タイトル</th>
					<th>内容</th>
					<th>日付</th>
					<th></th>
				</thead>
				<tbody>
					<tr v-for="item in task.list">
						<td>{{item.title}}</td>
						<td>{{item.summary}}</td>
						<td>{{item.date}}</td>
						<td><button v-on:click="openTask(item)">詳細</button></td>
					</tr>
				</tbody>
			</table>
			<div>
				<textarea v-model="task_title" placeholder="タイトルを入力"></textarea>
				<textarea v-model="summary" placeholder="タスク概要"></textarea>
				<button v-on:click="addTask">追加</button>
			</div>
		</div>

		<Detail v-show="show" v-bind:project="open_obj"
		v-on:add-log='addLog'
		v-on:add-ref='addRef'
		v-on:edit-summary='$emit("edit-summary", $event)'/>
	</div>
</template>

<script>
	import Detail from "./Detail.vue";
	export default {
		props:["task"],
		methods:{
			addTask(){
				this.$emit("add-task", {title: this.task_title, summary:this.summary});
				this.task_title = "";
				this.summary = "";
			},
			openTask(e){
				this.open_obj = e;
				this.show = true;
			},
			addLog(e){
				this.$emit("add-log", e);
				this.open_obj.log.push(e.log);
			},
			addRef(e){
				this.$emit("add-ref", e);
				this.open_obj.ref.push(e.ref);
			}
		},
		data(){
			return {
				task_title: "",
				summary: "",
				open_obj:{
				},
				show:false
			};
		},
		components:{
			Detail
		}
	}
</script>

<style>

</style>
