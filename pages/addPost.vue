<template lang="pug">
section.add-post
  app-header.add-post__header(title='Новый пост')
  .add-post__input-block
    app-input.add-post__input(
      label='Заголовок новости',
      v-model='newPost.title'
    )
    app-input.add-post__input(label='Краткая новость', v-model='newPost.short')
    app-input.add-post__input(
      label='Текст новости',
      inputType='area',
      v-model='newPost.text'
    )
  .add-post__button-block
    app-button.add-post__button(
      hasIcon,
      buttonTitle='Добавить новость',
      buttonIcon='add-icon_black',
      buttonColorTheme='dark',
      @handler='addPost'
    )
</template>

<script>
import { mapGetters } from 'vuex'
import header from '~/components/app-header.vue'
import input from '~/components/app-input.vue'
import button from '~/components/app-button.vue'

export default {
  components: {
    'app-header': header,
    'app-input': input,
    'app-button': button,
  },
  data() {
    return {
      newPost: {
        id: '',
        title: '',
        short: '',
        text: '',
      },
    }
  },
  computed: {
    ...mapGetters('allNews', ['news']),
  },
  mounted() {
    this.newPost.id = this.news[this.news.length - 1].id + 1
  },
  methods: {
    addPost() {
      this.$store.commit('allNews/addPost', this.newPost)
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style lang="scss" scoped>
.add-post {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  &__input-block {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1140px;
  }
  &__input {
    margin-top: 50px;
  }
  &__button-block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
  }
  &__button {
    margin: 0px 30px;
  }
}
</style>