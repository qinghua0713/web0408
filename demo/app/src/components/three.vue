<template>
  <div>
    <router-link to="/">去第一个</router-link>
    <router-link :to="{path:'/two',query:{id:1}}">去第二个</router-link>
      <form action="">
        <input type="text" id="test" v-model="date">
        <input type="submit" value="submit">
      </form>
  </div>
</template>

<script>
export default {
  name: "three",
  data() {
    return {
      isFalse:false,
       date: '2017-09-08 09:00:00'
    }
  },
   mounted: function () {
      console.log(laydate)
      laydate.render({
        elem: '#test',
        type:'datetime',
        done: (value) => {
          this.date = value
        }
      })
    }
};
</script>

<style>
</style>