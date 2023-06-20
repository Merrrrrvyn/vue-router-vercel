<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button">Home</router-link>
    <router-link to="/about" tag="button">About</router-link> -->
    <!-- <router-link to="/home" tag="button">Home</router-link>
    <router-link to="/about" tag="button">About</router-link> -->
    <!-- <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button> -->
    <router-link to="/home" >Home</router-link>
    <router-link to="/about" >About</router-link>
    <!-- <router-link :to="'/user/'+userId" >User</router-link>
    <router-link :to="{path: '/profile', query: {name: 'Mervyn', age: 18}}" >Profile</router-link> -->
    <button @click="userClick">User</button>
    <button @click="profileClick">Profile</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'Mervyn'
    }
  },
  methods: {
    homeClick() {
      console.log('HomeClick');
      // 通过代码的方式修改理由
      this.$router.push('/home')
      // this.$router.replace('/home')
    },
    aboutClick() {
      console.log('aboutClick');
      this.$router.push('/about')
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: { name: 'Mervyn', age: 18 }
      })
    }
  },
}
</script>


<style>

/* .router-link-active {
  color: #f00;
} */
.active {
  color: #f00;
}
</style>
