<template>
	<div>
		{{role.theme}}
		<ul>
			<li v-for="item in role.list">{{item.title}}:{{item.date}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:["role"],
		data(){
			return {

			};
		}
	}
</script>

<style>

</style>
