<template>
  <div id="app font-body" class=" dark:bg-gray-800 dark:text-gray-300">
    <the-header />
     <router-view />
     <the-footer />
  </div>
</template>


<script>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader'
import './styles/Index.css'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>


<style>
#app {
  /* font-family: Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
