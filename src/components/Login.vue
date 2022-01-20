<template>
  <v-container fill-height fluid>
      <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
              <v-card ref="form">
                  <v-card-text>
                      <v-alert v-if="error" type="error">
                          {{ error }}
                      </v-alert>
                      <v-text-field v-model="authData.Email" label="E-mail"></v-text-field>
                      <v-text-field v-model="authData.Password" label="Password" type="password"></v-text-field>
                  </v-card-text>
                  <v-btn block large color="primary" elevation="2" @click="login()">
                      Login
                  </v-btn>
              </v-card>
          </v-col>
      </v-row>
  </v-container>   
</template>

<script>
import axios from 'axios'
import { isJwtExpired } from 'jwt-check-expiration';

// window.onbeforeunload = () => {
//     localStorage.removeItem('token');
// }

window.onload = () => {
    const token = localStorage.getItem('token')

    if(token) {
        if(isJwtExpired(token)) {
            localStorage.removeItem('token');
            location.reload();
        }
    }
}

export default {

    data(){
        return{
            authData:{
                Email: "",
                Password: ""
            }
        }
    },
    methods: {
        sanitizeInput(input) {
         const specialChars = /[@#$%^&*_+=\]{};\\|<>]+/ig;
         const sanitizedString = input.toString().replaceAll(specialChars, '');

         return sanitizedString;
        },
        login() {
            for (let prop in this.authData) {
            this.authData[prop] = this.sanitizeInput(this.authData[prop]);
            }

            axios.post('https://vitalityfunctionsapp.azurewebsites.net/api/Login', { Email: this.authData.Email, Password: this.authData.Password })
            .then(response => {
                if (response.data.accessToken && response.data.userType === 'Admin') {
                    localStorage.setItem('token', response.data.accessToken)
                    this.$store.state.token = true
                }
            })
            //this.$store.dispatch('https://vitalityfunctionsapp.azurewebsites.net/api/Login', this.authData)
            //alert(this.authData.username + " " + this.authData.password)
        }
    }
}
</script>

<style>

</style>