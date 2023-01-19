<template>
	<div id="nav" class="pure-u">
		<div class="nav-inner">
			<div class="pure-menu">
				<ul class="pure-menu-list">
					<li class="pure-menu-item">
						<input type="text" class="theme-title" v-model="theme_title"/>
						<button value="" v-on:click="save">
							<i class="tiny material-icons">create_new_folder</i>
						</button>
					</li>
					<li class="pure-menu-item" v-for="item in list">
						<a class="pure-menu-link" v-on:click.prevent="$emit('select-theme', item)">{{item}}</a>
					</li>
				</ul>
			</div>
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

<style scoped>
	.theme-title{
		width:80%;
	}
	#nav{
		position: fixed;
    top: 0;
    bottom: 0;
    overflow: auto;
		background: rgb(37, 42, 58);
    text-align: center;
		padding-top: 10px;
		color: white;
		margin-left: -500px;
		width: 150px;
		height: 100%;
	}
</style>
