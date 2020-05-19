<template>
  <div id="app">
     <router-view> </router-view>  
  </div>
  
</template>

<script>
import Header from '@/components/Header'
import NavMenu from '@/components/NavMenu'
import Index from '@/components/Index'

export default {
  name: 'App',
  components: {
    'navmenu': NavMenu,
    'vheader': Header,
    'index': Index
  }
}
</script>

<style>
.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
