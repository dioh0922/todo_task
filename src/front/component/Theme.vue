<template>
	<div>
		<button value="" v-on:click="save">
			<i class="tiny material-icons">create_new_folder</i>
		</button>
		<input type="text" v-model="theme_title"/>
		<div class="pure-menu pure-menu-horizontal">
			<ul class="pure-menu-list">
				<li class="pure-menu-item" v-for="item in list">
					<a class="pure-menu-link" v-on:click.prevent="$emit('select-theme', item)">{{item}}</a>
				</li>
			</ul>
		</div>
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
