<template lang="pug">
.index-page
  app-header(
    title='Все новости'
    hasButton = true,
    buttonTitle = 'Добавить новость'
    buttonIcon = 'add-icon'
  )
  .card-block
    app-card.news-card(
      v-for='card in 6'
    )
</template>

<script>
import header from '~/components/app-header.vue'
import card from '~/components/app-news-card.vue'

export default {
  name: 'IndexPage',
  components: {
    'app-header': header,
    'app-card': card
  },
  data(){
    return{}
  },
}
</script>

<style lang="scss" scoped>
.index-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:100vw;
}
.card-block{
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1140px;

}
.news-card{
  margin-bottom: 30px;
}
</style>