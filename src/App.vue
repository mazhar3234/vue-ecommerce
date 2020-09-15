<template>
  <div id="app">
      <navbar-menu></navbar-menu>
    <router-view/>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import Navbar from './components/includes/Navbar.vue'
import Footer from './components/includes/Footer.vue'
export default {
  name: 'App',
  components: {
    'navbar-menu':Navbar,
    'bottom-footer':Footer


  }
}
</script>

<style>
</style>
