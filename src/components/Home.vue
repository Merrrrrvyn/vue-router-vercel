<template>
  <div class="home">
    <h2>I am Home</h2>
    <p>I am Home Content</p>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/messages">Messages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  created() {
    console.log('created');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
