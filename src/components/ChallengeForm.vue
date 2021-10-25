<template>
  <v-container>
    <v-form ref="form">
      <h1>Challenge toevoegen</h1>
      <v-text-field v-model="titel" label="Titel"></v-text-field>
      <v-text-field v-model="description" label="Beschrijving"></v-text-field>
      <v-text-field
        v-model="challengeType"
        label="Challenge type" placeholder="enter: 1 (Exercise), 2 (Diet) or 3 (Mind)"
      ></v-text-field>
      <v-text-field v-model="startdatum" label="Start datum" placeholder="MM/dd/YYYY"></v-text-field>
      <v-text-field v-model="einddatum" label="Eind datum" placeholder="MM/dd/YYYY"></v-text-field>
      <v-text-field v-model="location" label="Locatie"></v-text-field>
      <v-text-field v-model="points" label="Punten"></v-text-field>
      <v-btn class="mr-4" type="button" color="primary" @click="AddChallenge"> Submit </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  computed: {
  },
  data() {
    return {
      titel: "",
      description: "",
      challengeType: 0,
      location: "",
      points: 0,
      startdatum: "",
      einddatum: "",
      minDate: "",
      fromDateVal: "",
      fromDateMenu: false,
      challenges: [],
    };
  },
  methods: {
    AddChallenge() {
      const postData = {
        id: 0,
        title: this.titel,
        description: this.description,
        challengeType: this.challengeType,
        startDate: this.startdatum,
        endDate: this.einddatum,
        location: this.location,
        points: parseInt(this.points),
      };
      axios
        .post("https://vitalityfunctionsapp.azurewebsites.net/api/challenge", postData, { headers: {'Authorization': 'Bearer ' + localStorage.getItem('token') }})
        .then((result) => {
          console.log(result);
          this.$refs.form.reset();
          this.$emit("update");
        })
        .catch((error) => console.log(error));
      window.location.reload()
    },
  },
};
</script>

<style>
</style>