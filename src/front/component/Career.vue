<template>
	<div>
		<ul>
			<li v-for="item in list">
				<a v-on:click.prevent="$emit('select-theme', item)">{{item}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
 export default {
	 props:["list"],
	 mounted(){
		 //alert("form");
	 },
	 methods:{
	 },
 	data(){
 		return {
 		};
 	}
 }
</script>

<style>

</style>
