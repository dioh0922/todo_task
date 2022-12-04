<template>
	<div>
		{{task.theme}}
		<ul>
			<li v-for="item in task.list">
				{{item}}
			</li>
		</ul>
		<Project v-bind:project="task"></Project>
	</div>
</template>

<script>
	import Project from "./Project.vue";
	export default {
		props:["task"],
		data(){
			return {

			};
		},
		components:{
			Project
		}
	}
</script>

<style>

</style>
