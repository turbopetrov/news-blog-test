<template lang="pug">
  .card 
    h3.card__title.heading_md| {{title}}
    hr.card__divider
    p.card__text.paragraph_md.
      {{short}}
    NuxtLink(:to='{name: "id", params:{id: newsId} }')
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
  props:{
    title: {type: String, default: 'Заголовок новости'},
    short: {type: String, default: 'Краткая новость'},
    text: {type: String, default: 'Полный текст новости будет здесь'},
    newsId: {type: Number, default: 0}
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