<template>
   <v-container>
      <h1>Challenges</h1>
      <v-data-table
         :headers="headers"
         :items ="challenges"
         :items-per-page="10"
         class="elevation-1"
         @click:row="renderPopUp"
      >
      </v-data-table>

      <v-dialog v-model="dialogdetail">
         <v-card>
            <v-container>
               <v-form ref="form">
                  <h1>Challenge updaten of verwijderen</h1>
                  <v-text-field v-model="challenge.title" label="Titel"></v-text-field>
                  <v-text-field v-model="challenge.description" label="Beschrijving"></v-text-field>
                  <v-text-field
                  v-model="challenge.challengeType"
                  label="Challenge Type [Beweging(1), Voeding(2), Mentaal(3)]"
                  ></v-text-field>
                  <v-text-field
                     v-model="challenge.startDate"
                     label="Startdatum (jjjj-mm-dd)"
                  ></v-text-field>
                  <v-text-field
                     v-model="challenge.endDate"
                     label="Einddatum (jjjj-mm-dd)"
                  ></v-text-field>
                  <v-text-field v-model="challenge.location" label="Locatie"></v-text-field>
                  <v-text-field v-model="challenge.points" label="Punten"></v-text-field>
                  <v-btn class="mr-4" type="button" color="primary" @click="updateChallenge(challenge)">Update challenge</v-btn>
                  <v-btn class="mr-4" type="button" color="secondary" @click="deleteSingleChallenge(challenge)">Verwijder challenge</v-btn>
               </v-form>
            </v-container>
         </v-card>
      </v-dialog>
   </v-container>
</template>

<script>
import axios from "axios"
//import ChallengePopUp from './ChallengePopUp.vue';

export default {

   data() {
      return {
         challenges: [],
         challenge: {}
      };
   },
   components:{
      //ChallengePopUp
   },

   computed: {
      headers() {
         return [
            { text: "Titel", value: "title"},
            { text: "Beschrijving", value: "description"},
            { text: "Challenge type", value: "challengeType"},
            { text: "Start datum", value: "startDate"},
            { text: "Eind datum", value: "endDate"},
            { text: "Locatie", value: "location"},
            { text: "Punten", value: "points"},
            { text: "Deelnemers", value: "totalSubscribers"}
         ];
      },
      
   },
   
   mounted() {
      this.loadData();
   },
   methods: {
      loadData() {
         axios.get('https://vitalityfunctionsapp.azurewebsites.net/api/challenge?limit=500&offset=0', { headers: {'Authorization': 'Bearer ' + localStorage.getItem('token') } })
         .then((response) => {
            console.log(response);
            this.challenges = response.data;
         })
         .catch((error) => console.log(error))
      },
      async deleteSingleChallenge(challenge) {
         await axios.delete('https://vitalityfunctionsapp.azurewebsites.net/api/challenge/' + challenge.challengeId, { headers: {'Authorization': 'Bearer ' + localStorage.getItem('token') } })
         .then(response => {
            console.log(response.data)
            this.loadData()
            window.location.reload()
         })
      },
      renderPopUp(challengeToUpdate) {
         this.challenge = challengeToUpdate
         this.dialogdetail = true
      },
      async updateChallenge(challenge) {
         const updateProperties = {
            title: challenge.title,
            description: challenge.description,
            challengeType: challenge.challengeType,
            startDate: challenge.startDate,
            endDate: challenge.endDate,
            location: challenge.location,
            points: challenge.points
         }
         await axios.put('https://vitalityfunctionsapp.azurewebsites.net/api/challenge/' + challenge.challengeId, updateProperties, { headers: {'Authorization': 'Bearer ' + localStorage.getItem('token') } })
         .then(result => {
            console.log(result.data)
            window.location.reload()
         })
      }
   }

}
</script>

<style>

</style>