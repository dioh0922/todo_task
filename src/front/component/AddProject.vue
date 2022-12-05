<template>
  <div>
    <textarea v-model="task_title" placeholder="タイトルを入力"></textarea>
    <textarea v-model="summary" placeholder="タスク概要"></textarea>
    <button v-on:click="addTask">追加</button>
  </div>
</template>

<script>
  export default {
    props:[""],
    methods:{
      addTask(){
        this.$emit("add-task", {title: this.task_title, summary:this.summary});
      }
    },
    data(){
      return {
        task_title: "",
        summary: ""
      };
    }
  }
</script>
<style>

</style>
