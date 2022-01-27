<template lang="pug">
section.edit-post
  app-header.edit-post__header(title='Редактирование')
  .edit-post__input-block
    app-input.edit-post__input(
      label='Заголовок новости',
      v-model='currentPost.title'
    )
    app-input.edit-post__input(
      label='Краткая новость',
      v-model='currentPost.short'
    )
    app-input.edit-post__input(
      label='Текст новости',
      inputType='area',
      v-model='currentPost.text'
    )
  .edit-post__button-block
    app-button.edit-post__button(
      hasIcon,
      buttonTitle='Сохранить новость',
      buttonIcon='ok-icon',
      buttonColorTheme='dark',
      @handler='savePost'
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
      currentPost: {

      },
    }
  },
  computed: {
    ...mapGetters('allNews', ['news']),
  },
  created() {
    this.currentPost = Object.assign(
      {},
      this.currentPost,
      this.news.find((item) => item.id === this.$route.params.id)
    )
  },

  methods: {
    savePost() {},
  },
}
</script>

<style lang="scss" scoped>
.edit-post {
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