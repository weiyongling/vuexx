<template>
  <div id="app">
    <Header />
    <!-- <TypeNav /> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TypeNav from '@/components/TypeNav'
export default {
  name: 'App',
  components: {
    Footer,Header,TypeNav
  }
}
</script>

<style>

</style>
