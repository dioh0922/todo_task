<template>
	<div>
		{{role.company}}
		<ul>
			<li v-for="item in role.list">
				{{item.role}}
				<Project v-bind:project="item.tech"></Project>
			</li>
		</ul>
	</div>
</template>

<script>
	import Project from "./Project.vue";
	export default {
		props:["role"],
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
