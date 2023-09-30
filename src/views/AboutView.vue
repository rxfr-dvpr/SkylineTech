<template>
  <APHeader/>

  <APAboutSctn/>
</template>

<script>
import APHeader from '@/components/aboutPage/APHeader.vue'
import APAboutSctn from '@/components/aboutPage/APAboutSctn.vue'

export default {
  name: 'About View',
  components: {
    APHeader,
    APAboutSctn
  }
}

</script>

<style lang="scss" scoped>

</style>