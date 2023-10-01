<template>
  <CPHeader/>

  <CPContactSctn/>
</template>

<script>
import CPHeader from '@/components/contactPage/CPHeader.vue'
import CPContactSctn from '@/components/contactPage/CPContactSctn.vue'

export default {
  name: 'Contact View',
  components: {
    CPHeader,
    CPContactSctn
  }
}

</script>

<style lang="scss" scoped>

</style>