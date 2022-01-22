<template lang="pug">
  .card 
    h3.card__title.heading_md| Бамблби вновь нагнул десептиконов
    hr.card__divider
    p.card__text.
      Пишем какой-то текст просто чтобы проверить,
      как работает параграф в карточке. Нам все еще нудно больше текста
    app-button.card__button(
      :hasIcon = 'false'
      buttonTitle='Читать больше'
      buttonColorTheme='dark'
    )
    
</template>

<script>
import btn from '~/components/app-button.vue'
export default {
  components:{
    'app-button':btn
  },
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
.card{
  width: 270px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid $dark;
  border-radius: 10px;
  padding: 40px 20px;
  &__title{
    text-align: center;
  }
  &__divider{
    height: 2px;
    width: 90px;
    background: $dark
  }
  &__text{
    text-align: center;
  }
}


</style>