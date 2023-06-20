<template>
  <div class="user">
    <h2>I am User</h2>
    <p>I am User Content</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
      userId() {
          return this.$route.params.userId
          // $route拿到的是出于活跃状态的那个route
          // $router拿到的是所有的route
      }
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
