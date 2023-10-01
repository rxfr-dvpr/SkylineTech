<template>
  <PPHeader/>

  <PPPortfolios/>
</template>

<script>
import PPHeader from '@/components/portfoliosPage/PPHeader.vue'
import PPPortfolios from '@/components/portfoliosPage/PPPortfolios.vue'

export default {
  name: 'Portfolios View',
  components: {
    PPHeader,
    PPPortfolios
  }
}

</script>

<style lang="scss" scoped>
</style>