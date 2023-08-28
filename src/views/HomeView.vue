<template>
  <HomeHeader/>

  <main class="main"></main>
</template>

<script>
import HomeHeader from '@/components/homePage/HomeHeader.vue'

export default {
  name: 'Home View',
  components: {
    HomeHeader
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>