<template>
	<div>
		{{task.theme}}
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
					<td></td>
					<td>{{date}}</td>
					<td><button v-on:click="openTask(item)">詳細</button></td>
				</tr>
			</tbody>
		</table>
		<AddProject v-on:add-task="$emit('add-task', $event)"/>
		<Project v-show="show" v-bind:project="open_obj"/>
	</div>
</template>

<script>
	import AddProject from "./AddProject.vue";
	import Project from "./Project.vue";
	export default {
		props:["task"],
		methods:{
			openTask(e){
				this.open_obj = e;
				this.show = true;
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
			Project,
			AddProject
		}
	}
</script>

<style>

</style>
