<template lang="pug">
  .upper-wrap
    Nuxt
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss">
  .upper-wrap{
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 180px;
    background: $dark
  }
</style>