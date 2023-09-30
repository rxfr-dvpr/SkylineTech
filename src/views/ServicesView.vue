<template>
  <SPHeader/>

  <SPServices/>
</template>

<script>
import SPHeader from '@/components/servicesPage/SPHeader.vue'
import SPServices from '@/components/servicesPage/SPServices.vue'

export default {
  name: 'Services View',
  components: {
    SPHeader,
    SPServices
  }
}

</script>

<style lang="scss" scoped>

</style>