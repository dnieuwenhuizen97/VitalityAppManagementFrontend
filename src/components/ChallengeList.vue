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

                  <label for="img">Afbeelding toevoegen</label>
                  <input type="file" id="img" name="img" accept="image/*">
                  
                  <label for="vid">Video toevoegen</label>
                  <input type="file" id="vid" name="vid" accept="video/*">

                  <br>
                  <br>

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
            { text: "Titel", value: "title" },
            { text: "Beschrijving", value: "description" },
            { text: "Challenge type", value: "challengeType" },
            { text: "Start datum", value: "startDate" },
            { text: "Eind datum", value: "endDate" },
            { text: "Locatie", value: "location" },
            { text: "Punten", value: "points" },
            { text: "Deelnemers", value: "totalSubscribers" },
            { text: "Afbeelding", value: "imageLink" },
            { text: "Video", value: "videoLink" }
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
      sanitizeInput(input) {
         const specialChars = /[@#$%^&*_+=\]{};\\|<>]+/ig;
         const sanitizedString = input.toString().replaceAll(specialChars, '');

         return sanitizedString;
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

         for (let prop in updateProperties) {
            updateProperties[prop] = this.sanitizeInput(updateProperties[prop]);
         }

         var image = document.querySelector('#img');
         var imgfile = image.files[0];
         if (imgfile) {
            let formdata = new FormData();
            formdata.append('file', imgfile)
            if (imgfile.name.endsWith('.jpg') || imgfile.name.endsWith('.jpeg') || imgfile.name.endsWith('.png')) {
               await axios.put('https://vitalityfunctionsapp.azurewebsites.net/api/challenge/' + challenge.challengeId + '/image', formdata, { headers: {'Authorization': 'Bearer ' + localStorage.getItem('token') } })
               .then(result => {
                  console.log(result.data);
               })
            }
         }
         
         var video = document.querySelector('#vid');
         var vidfile = video.files[0];
         if (vidfile) {
            let formdata = new FormData();
            formdata.append('file', vidfile)
            if (vidfile.name.endsWith('.mp4') || vidfile.name.endsWith('.mov') || vidfile.name.endsWith('.avi') || vidfile.name.endsWith('.wmv')) {
               await axios.put('https://vitalityfunctionsapp.azurewebsites.net/api/challenge/' + challenge.challengeId + '/video', formdata, { headers: {'Authorization': 'Bearer ' + localStorage.getItem('token') } })
               .then(result => {
                  console.log(result.data);
               })
            }
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