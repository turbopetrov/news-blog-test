<template lang="pug">
.news-page
  app-header(
    :title='`Новость № ${currentPost.id}`',
    hasButton,
    buttonTitle='Редактировать новость',
    buttonIcon='edit-icon'
    :buttonAction='goToEditPage'
  )
  .text-block
    h2.news-page__title.heading_xl.dark {{ currentPost.title }}
    p.news-page__short.paragraph_xl {{ currentPost.short }}
    hr.news-page__divider
    p.news-page__text.paragraph_lg {{ currentPost.text }}
</template>

<script>
import { mapGetters } from 'vuex'
import header from '~/components/app-header.vue'

export default {
  name: 'NewsId',

  components: {
    'app-header': header,
  },

  data() {
    return {
      currentPost: {},
    }
  },
  computed: {
    ...mapGetters('allNews', ['news']),
  },
  mounted() {
    this.currentPost = Object.assign(
      {},
      this.currentPost,
      this.news.find((item) => item.id === this.$route.params.id)
    )
  },
  methods:{
    goToEditPage(){
      this.$router.push({name:'id-editPost', params:{id: this.currentPost.id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.news-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  &__title {
    margin-bottom: 30px;
  }
  &__short {
    margin-bottom: 25px;
  }
  &__divider {
    height: 1px;
    width: 100%;
    background: $dark;
    margin-bottom: 25px;
  }
}
.text-block {
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 730px;
  padding: 0px 15px;
}
</style>