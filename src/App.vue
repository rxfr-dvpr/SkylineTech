<template>
  <Nav/>

  <router-view/>

  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}

</script>

<style lang="scss" scoped>
</style>