<template lang="pug">
  button.btn
    .btn__icon-wrap
      img.btn__icon(src='~/assets/img/add-icon.svg')
    p.btn__title.heading_sm| Добавить новость
</template>

<script>
export default {
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
    justify-content: space-between;
    align-items: center;
    border: 2px solid $white;
    border-radius: 10px;
    background: transparent;
    color: $white;
    transition: .3s;
    &:hover{
      border: 2px solid $yellow;
      box-shadow: 0px -1px 30px -6px #EBEF18;
    }

  }
</style>