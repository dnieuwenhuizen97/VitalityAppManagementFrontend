<template>
  <form @submit.prevent="submit">
      <input v-model="formEdit.product_name">
      <textarea v-model="formEdit.product_description">
  </form>
</template>

<script>
import axios from "../axios-auth"

export default {
    data() {
        return {
            formEdit: {
                product_name: "",
                product_description: ""
            }
        }
    },

    methods: {
        submit(){
            axios.put('https://vitalityfunctionsapp.azurewebsites.net/challenge', this.formEdit)
        }
    },
}
</script>
