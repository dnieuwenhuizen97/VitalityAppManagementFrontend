<template>
  <v-app>
    <v-app-bar
      app
      color="#E2067F"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Hogeschool Inholland Logo"
          class="shrink mr-2"
          contain
          src="https://pbs.twimg.com/profile_images/918373751665909760/bxio395B_400x400.jpg"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-right">
        <v-img
          alt="Vitaliteits Logo"
          class="mx-2"
          contain
          src="HeartLogo.png"
          transition="scale-transition"
          width="40"
          align="right"
        />
      </div>

      <div class="d-flex align-right">
        <v-btn class="mr-4" type="button" color="primary" v-if="this.$store.getters.isAuthenticated" @click="Logout()">Logout</v-btn>
      </div>

    </v-app-bar>

    <v-main>
      <!-- <Nav v-if="this.$store.getters.isAuthenticated"/> -->
      <Login v-if="!this.$store.getters.isAuthenticated"/>
      <ChallengeList v-if="this.$store.getters.isAuthenticated"/>
      <ChallengeForm v-if="this.$store.getters.isAuthenticated"/>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login';
import ChallengeList from './components/ChallengeList';
import ChallengeForm from './components/ChallengeForm.vue';
//import Nav from './components/Nav';

export default {
  name: 'App',

  components: {
    Login,
    ChallengeList,
    ChallengeForm,
    //Nav,
  },

  data: () => ({
    //
  }),

  methods: 
  {
    Logout() 
    {
      localStorage.clear();
      window.location.reload();
    },
  }

};
</script>
