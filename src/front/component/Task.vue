<template>
	<div id="list" class="pure-u-1">
		{{task.theme}}
		<div v-show="!status.disp">
			<table  class="pure-table">
				<thead>
					<th>タイトル</th>
					<th>内容</th>
					<th>日付</th>
					<th></th>
				</thead>
				<tbody>
					<tr v-for="item in task.list">
						<td>{{item.title}}</td>
						<td><p v-html="replaceCrlf(item.summary)"></p></td>
						<td>{{item.date}}</td>
						<td>
							<button v-on:click="$emit('open-task', item)">
								<i class="tiny material-icons">open_in_new</i>
							</button>
						</td>
					</tr>
					<tr v-show="task.theme != '' ">
						<td><textarea v-model="task_title" placeholder="タイトルを入力"></textarea></td>
						<td><textarea v-model="summary" placeholder="タスク概要"></textarea></td>
						<td></td>
						<td>
							<button v-on:click="addTask">
								<i class="tiny material-icons">add_circle</i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<Detail v-show="status.disp" v-bind:project="obj"
		v-on:add-log="$emit('add-log', $event)"
		v-on:add-ref="$emit('add-ref', $event)"
		v-on:edit-summary='$emit("edit-summary", $event)'/>
	</div>
</template>

<script>
	import Detail from "./Detail.vue";
	export default {
		props:["task", "status", "obj"],
		methods:{
			replaceCrlf(str){
				return str.replace("\n", "<br>");
			},
			addTask(){
				this.$emit("add-task", {title: this.task_title, summary:this.summary});
				this.task_title = "";
				this.summary = "";
			},
		},
		data(){
			return {
				task_title: "",
				summary: "",
			};
		},
		components:{
			Detail
		}
	}
</script>

<style scoped>
	#list{
		margin-left: 20px;
		width: 100%;
		height: 33%;
		border-bottom: 1px solid #ddd;
	}
</style>
