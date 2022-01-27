<template lang="pug">
  button.btn(
    :class='`btn_${buttonColorTheme}`'
    @click='$emit("handler")'
    )
    .btn__icon-wrap(v-if='hasIcon')
      img.btn__icon(:src='require(`~/assets/img/${buttonIcon}.png`)')
    p.btn__title.heading_sm(
      :class='`${buttonColorTheme}`'
    )| {{buttonTitle}}
</template>

<script>
export default {
  props:{
    hasIcon:{
      type: Boolean,
      default:true
    },
    buttonTitle:{
      type: String,
      default:'Кнопка'
    },
    buttonIcon:{
      type: String,
      default:'add-icon'
    },
    buttonColorTheme:{
      type:String,
      default: 'white'
    }
  },
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
  .btn{
    width: 230px;
    height: 54px;
    padding: 0px 18px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid $white;
    border-radius: 10px;
    background: transparent;
    color: $white;
    transition: .3s;
    &__icon-wrap{
      margin-right: 20px;
    }
    &__title{
      text-transform: uppercase;
      
    }
    &:hover{
      cursor: pointer;
      border: 2px solid $yellow;
      box-shadow: 0px -1px 30px -6px #EBEF18;
    }
    &_white{
      border: 2px solid $white;
      background: transparent;
    }
    &_dark{
      color: $dark !important;
      border: 2px solid $dark;
      background: transparent;
    }

  }
</style>