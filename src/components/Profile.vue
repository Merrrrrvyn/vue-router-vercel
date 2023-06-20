<template>
  <div class="profile">
    <h2>I am Profile</h2>
    <p>I am Profile Content</p>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
        name: this.$route.query.name,
        age: this.$route.query.age
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
