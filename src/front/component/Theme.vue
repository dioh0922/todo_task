<template>
	<div>
		<button value="" v-on:click="save">
			<i class="tiny material-icons">create_new_folder</i>
		</button>
		<input type="text" v-model="theme_title"/>
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
		 save(){
			 this.$emit("add-theme", this.theme_title);
			 this.theme_title = "";
		 }
	 },
 	data(){
 		return {
			theme_title: ""
 		};
 	},
	components:{
	}
 }
</script>

<style>

</style>
