<template lang="pug">
.news-page
  app-header(
    :title='`Новость № ${currentPost.id}`',
    hasButton=true,
    buttonTitle= 'Редактировать новость',
    buttonIcon='edit-icon'
  )
  .text-block
    h2.news-page__title.heading_xl.dark|{{currentPost.title}}
    p.news-page__short.paragraph_xl|{{currentPost.short}}
    hr.news-page__divider
    p.news-page__text.paragraph_lg|{{currentPost.text}}

</template>

<script>
import {mapGetters} from 'vuex'
import header from '~/components/app-header.vue'

export default {
  name: 'NewsId',

  components:{
    'app-header': header,
  },

  data(){
    return{}
  },
  computed:{
    ...mapGetters('allNews',['news']),
    currentPost(){
      return this.news.find(item=>item.id===this.$route.params.id)
      },
    },
}
</script>

<style lang="scss" scoped>
.news-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:100vw;
  &__title{
    margin-bottom: 30px;
  }
  &__short{
    margin-bottom: 25px;
  }
  &__divider{
    height: 1px;
    width: 100%;
    background: $dark;
    margin-bottom: 25px;
  }
  
}
.text-block{
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 730px;
  padding: 0px 15px;
}
</style>