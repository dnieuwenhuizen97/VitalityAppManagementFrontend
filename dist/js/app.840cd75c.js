(function(e){function t(t){for(var n,r,i=t[0],s=t[1],c=t[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&p.push(l[r][0]),l[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==l[s]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},l={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"#E2067F",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Hogeschool Inholland Logo",contain:"",src:"https://pbs.twimg.com/profile_images/918373751665909760/bxio395B_400x400.jpg",transition:"scale-transition",width:"40"}})],1),a("v-spacer"),a("div",{staticClass:"d-flex align-right"},[a("v-img",{staticClass:"mx-2",attrs:{alt:"Vitaliteits Logo",contain:"",src:"HeartLogo.png",transition:"scale-transition",width:"40",align:"right"}})],1),a("div",{staticClass:"d-flex align-right"},[this.$store.getters.isAuthenticated?a("v-btn",{staticClass:"mr-4",attrs:{type:"button",color:"primary"},on:{click:function(t){return e.Logout()}}},[e._v("Logout")]):e._e()],1)],1),a("v-main",[this.$store.getters.isAuthenticated?e._e():a("Login"),this.$store.getters.isAuthenticated?a("ChallengeList"):e._e(),this.$store.getters.isAuthenticated?a("ChallengeForm"):e._e()],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[a("v-card",{ref:"form"},[a("v-card-text",[e.error?a("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),a("v-text-field",{attrs:{label:"E-mail"},model:{value:e.authData.UserEmail,callback:function(t){e.$set(e.authData,"UserEmail",t)},expression:"authData.UserEmail"}}),a("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:e.authData.Password,callback:function(t){e.$set(e.authData,"Password",t)},expression:"authData.Password"}})],1),a("v-btn",{attrs:{block:"",large:"",color:"primary",elevation:"2"},on:{click:function(t){return e.login()}}},[e._v(" Login ")])],1)],1)],1)],1)},i=[],s=a("bc3a"),c=a.n(s),u={data:function(){return{authData:{UserEmail:"",Password:""}}},methods:{login:function(){var e=this;c.a.post("https://vitalityfunctionsapp.azurewebsites.net/api/Login",{UserEmail:this.authData.UserEmail,Password:this.authData.Password}).then((function(t){t.data.accessToken&&"Admin"===t.data.userType&&(localStorage.setItem("token",t.data.accessToken),e.$store.state.token=!0)}))}}},d=u,p=a("2877"),h=a("6544"),g=a.n(h),f=a("0798"),v=a("8336"),m=a("b0af"),b=a("99d9"),x=a("62ad"),w=a("a523"),y=a("0fd9"),k=a("8654"),C=Object(p["a"])(d,r,i,!1,null,null,null),D=C.exports;g()(C,{VAlert:f["a"],VBtn:v["a"],VCard:m["a"],VCardText:b["a"],VCol:x["a"],VContainer:w["a"],VRow:y["a"],VTextField:k["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h1",[e._v("Challenges")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.challenges,"items-per-page":10},on:{"click:row":e.renderPopUp}}),a("v-dialog",{model:{value:e.dialogdetail,callback:function(t){e.dialogdetail=t},expression:"dialogdetail"}},[a("v-card",[a("v-container",[a("v-form",{ref:"form"},[a("h1",[e._v("Challenge updaten of verwijderen")]),a("v-text-field",{attrs:{label:"Titel"},model:{value:e.challenge.title,callback:function(t){e.$set(e.challenge,"title",t)},expression:"challenge.title"}}),a("v-text-field",{attrs:{label:"Beschrijving"},model:{value:e.challenge.description,callback:function(t){e.$set(e.challenge,"description",t)},expression:"challenge.description"}}),a("v-text-field",{attrs:{label:"Challenge Type [Beweging(1), Voeding(2), Mentaal(3)]"},model:{value:e.challenge.challengeType,callback:function(t){e.$set(e.challenge,"challengeType",t)},expression:"challenge.challengeType"}}),a("v-text-field",{attrs:{label:"Startdatum (jjjj-mm-dd)"},model:{value:e.challenge.startDate,callback:function(t){e.$set(e.challenge,"startDate",t)},expression:"challenge.startDate"}}),a("v-text-field",{attrs:{label:"Einddatum (jjjj-mm-dd)"},model:{value:e.challenge.endDate,callback:function(t){e.$set(e.challenge,"endDate",t)},expression:"challenge.endDate"}}),a("v-text-field",{attrs:{label:"Locatie"},model:{value:e.challenge.location,callback:function(t){e.$set(e.challenge,"location",t)},expression:"challenge.location"}}),a("v-text-field",{attrs:{label:"Punten"},model:{value:e.challenge.points,callback:function(t){e.$set(e.challenge,"points",t)},expression:"challenge.points"}}),a("v-btn",{staticClass:"mr-4",attrs:{type:"button",color:"primary"},on:{click:function(t){return e.updateChallenge(e.challenge)}}},[e._v("Update challenge")]),a("v-btn",{staticClass:"mr-4",attrs:{type:"button",color:"secondary"},on:{click:function(t){return e.deleteSingleChallenge(e.challenge)}}},[e._v("Verwijder challenge")])],1)],1)],1)],1)],1)},j=[],V=a("1da1"),T=(a("a4d3"),a("e01a"),a("96cf"),{data:function(){return{challenges:[],challenge:{}}},components:{},computed:{headers:function(){return[{text:"Titel",value:"title"},{text:"Beschrijving",value:"description"},{text:"Challenge type",value:"challengeType"},{text:"Start datum",value:"startDate"},{text:"Eind datum",value:"endDate"},{text:"Locatie",value:"location"},{text:"Punten",value:"points"},{text:"Deelnemers",value:"totalSubscribers"}]}},mounted:function(){this.loadData()},methods:{loadData:function(){var e=this;c.a.get("https://vitalityfunctionsapp.azurewebsites.net/api/challenge?limit=500&offset=0",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){console.log(t),e.challenges=t.data})).catch((function(e){return console.log(e)}))},deleteSingleChallenge:function(e){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c.a.delete("https://vitalityfunctionsapp.azurewebsites.net/api/challenge/"+e.challengeId,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),t.loadData(),window.location.reload()}));case 2:case"end":return a.stop()}}),a)})))()},renderPopUp:function(e){this.challenge=e,this.dialogdetail=!0},updateChallenge:function(e){return Object(V["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={title:e.title,description:e.description,challengeType:e.challengeType,startDate:e.startDate,endDate:e.endDate,location:e.location,points:e.points},t.next=3,c.a.put("https://vitalityfunctionsapp.azurewebsites.net/api/challenge/"+e.challengeId,a,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),window.location.reload()}));case 3:case"end":return t.stop()}}),t)})))()}}}),S=T,$=a("8fea"),P=a("169a"),A=a("4bd4"),L=Object(p["a"])(S,_,j,!1,null,null,null),O=L.exports;g()(L,{VBtn:v["a"],VCard:m["a"],VContainer:w["a"],VDataTable:$["a"],VDialog:P["a"],VForm:A["a"],VTextField:k["a"]});var E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-form",{ref:"form"},[a("h1",[e._v("Challenge toevoegen")]),a("v-text-field",{attrs:{label:"Titel"},model:{value:e.titel,callback:function(t){e.titel=t},expression:"titel"}}),a("v-text-field",{attrs:{label:"Beschrijving"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),a("v-text-field",{attrs:{label:"Challenge type",placeholder:"enter: 1 (Exercise), 2 (Diet) or 3 (Mind)"},model:{value:e.challengeType,callback:function(t){e.challengeType=t},expression:"challengeType"}}),a("v-text-field",{attrs:{label:"Start datum",placeholder:"MM/dd/YYYY"},model:{value:e.startdatum,callback:function(t){e.startdatum=t},expression:"startdatum"}}),a("v-text-field",{attrs:{label:"Eind datum",placeholder:"MM/dd/YYYY"},model:{value:e.einddatum,callback:function(t){e.einddatum=t},expression:"einddatum"}}),a("v-text-field",{attrs:{label:"Locatie"},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}}),a("v-text-field",{attrs:{label:"Punten"},model:{value:e.points,callback:function(t){e.points=t},expression:"points"}}),a("v-btn",{staticClass:"mr-4",attrs:{type:"button",color:"primary"},on:{click:e.AddChallenge}},[e._v(" Submit ")])],1)],1)},B=[],M={computed:{},data:function(){return{titel:"",description:"",challengeType:0,location:"",points:0,startdatum:"",einddatum:"",minDate:"",fromDateVal:"",fromDateMenu:!1,challenges:[]}},methods:{AddChallenge:function(){var e=this,t={id:0,title:this.titel,description:this.description,challengeType:this.challengeType,startDate:this.startdatum,endDate:this.einddatum,location:this.location,points:parseInt(this.points)};c.a.post("https://vitalityfunctionsapp.azurewebsites.net/api/challenge",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){console.log(t),e.$refs.form.reset(),e.$emit("update")})).catch((function(e){return console.log(e)})),window.location.reload()}}},U=M,I=Object(p["a"])(U,E,B,!1,null,null,null),z=I.exports;g()(I,{VBtn:v["a"],VContainer:w["a"],VForm:A["a"],VTextField:k["a"]});var F={name:"App",components:{Login:D,ChallengeList:O,ChallengeForm:z},data:function(){return{}},methods:{Logout:function(){localStorage.clear(),window.location.reload()}}},Y=F,R=a("7496"),H=a("40dc"),J=a("adda"),q=a("f6c4"),G=a("2fa4"),K=Object(p["a"])(Y,l,o,!1,null,null,null),N=K.exports;g()(K,{VApp:R["a"],VAppBar:H["a"],VBtn:v["a"],VImg:J["a"],VMain:q["a"],VSpacer:G["a"]});var Q=a("f309");n["a"].use(Q["a"]);var W=new Q["a"]({}),X=a("2f62"),Z=c.a.create({baseURL:"localhost:8080/api/"}),ee=Z;n["a"].use(X["a"]);var te=new X["a"].Store({state:{token:localStorage.getItem("token"),username:null},getters:{isAuthenticated:function(e){return null!=e.token}},mutations:{authUser:function(e,t){console.log(t.token),e.token=t.token,e.username=t.token}},actions:{login:function(e,t){var a=e.commit;ee.post("Login",{username:t.username,password:t.password}).then((function(e){console.log(e),a("authUser",e.data),ee.defaults.headers.common["Authorization"]="Bearer"+e.data.token})).catch((function(e){return console.log(e)}))}}});n["a"].config.productionTip=!1,new n["a"]({vuetify:W,store:te,render:function(e){return e(N)}}).$mount("#app")}});
//# sourceMappingURL=app.840cd75c.js.map