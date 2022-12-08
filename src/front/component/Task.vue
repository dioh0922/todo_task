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
			<AddTask v-on:add-task="$emit('add-task', $event)"/>
		</div>
		<Detail v-show="show" v-bind:project="open_obj" v-on:add-log='$emit("add-log", $event)' v-on:add-ref='$emit("add-ref", $event)'/>
	</div>
</template>

<script>
	import AddTask from "./AddTask.vue";
	import Detail from "./Detail.vue";
	export default {
		props:["task"],
		methods:{
			openTask(e){
				this.open_obj = e;
				this.show = true;
			},
			add(e){
				console.log(e);
			}
		},
		data(){
			return {
				open_obj:{
				},
				show:false
			};
		},
		components:{
			Detail,
			AddTask
		}
	}
</script>

<style>

</style>
