<template lang="pug">
  header.header
    h1.header__title.heading_xl|Все новости
    app-button.header__btn
</template>

<script>
import btn from '~/components/app-button.vue'
export default {
  components:{
    'app-button': btn
  },
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
  .header{
    width: 1140px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title{
      
    }
    &__btn{

    }
  }
</style>