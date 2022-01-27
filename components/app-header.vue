<template lang="pug">
header.header
  .header__inner-wrapper
    h1.header__title.heading_xl|{{title}}
    app-button.header__btn(
      v-if='hasButton'
      :buttonTitle='buttonTitle'
      :buttonIcon='buttonIcon'
      @handler='buttonAction'
    )
</template>

<script>
import btn from '~/components/app-button.vue'

export default {
  
  components:{
    'app-button': btn
  },
  props:{
    title:{
      type: String,
      default:'Заголовок'
    },
    hasButton: {
      type: Boolean,
      default: false
    },
    buttonTitle:{
      type: String,
      default: 'Кнопка'
    },
    buttonIcon:{
      type: String,
      default: 'add-icon'
    },
    buttonAction:{
      type: Function,
      default: null
    }
  },
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 180px;
    background: $dark;
    &__inner-wrapper{
      width: 1140px;
      height: 180px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>