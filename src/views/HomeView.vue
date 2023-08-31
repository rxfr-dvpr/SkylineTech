<template>
  <HomeHeader/>

  <main class="main">
    <HMServices/>

    <HMMisson/>

    <HMStatistic/>

    <HMPartners/>
  </main>
</template>

<script>
import HomeHeader from '@/components/homePage/HMHeader.vue'
import HMServices from '@/components/homePage/HMServices.vue'
import HMMisson from '@/components/homePage/HMMisson.vue'
import HMStatistic from '@/components/homePage/HMStatistic.vue'
import HMPartners from '@/components/homePage/HMPartners.vue'

export default {
  name: 'Home View',
  components: {
    HomeHeader,
    HMServices,
    HMMisson,
    HMStatistic,
    HMPartners
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