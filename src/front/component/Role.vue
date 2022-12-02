<template>
	<div>
		{{role.company}}
		<ul>
			<li v-for="item in role.list">{{item}}</li>
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
