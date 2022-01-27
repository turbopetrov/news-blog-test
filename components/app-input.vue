<template lang="pug">
.input
  .input-label.paragraph_xs|{{label}}
    textarea.app-input.paragraph_md(
      v-if='inputType === "area"'
      :value="value"
      @input='$emit("input", $event.target.value)'    
    ) 
    input.app-input.paragraph_xl(
      v-else
      :value="value"
      @input='$emit("input", $event.target.value)'
    )

</template>

<script>
export default {
  props:{
    label:{
      type: String,
      default: 'Введите текст'
    },
    inputType:{
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
.input{  
  display: flex;
  width: 730px;
}
.app-input{
  width: 730px;
  max-width: 100%;
  height: 60px;
  border: 2px solid $dark;
  border-radius: 8px;
  margin-top: 10px;
  padding: 0px 10px !important;
}
textarea.app-input{
  min-height: 180px;
  padding-top: 10px;
}

</style>