<template>
	<div>
		<AddTheme v-on:add-theme="$emit('add-theme', $event)"/>
		<ul>
			<li v-for="item in list">
				<a v-on:click.prevent="$emit('select-theme', item)">{{item}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
 import AddTheme from "./AddTheme.vue";
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
 	},
	components:{
		AddTheme
	}
 }
</script>

<style>

</style>
