import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
Vue.use(Vuex)

export const store = new Vuex.Store(
    {
        state : {
            token: localStorage.getItem('token'),
            username: null
        },
        getters: {
            isAuthenticated(state){
                return state.token != null
            }
        },
        mutations: {
            authUser(state, userData){
                console.log(userData.token);
                state.token = userData.token,
                state.username = userData.token
            }
        },
        actions: {
            login({commit}, userData)
            {
                axios.post("Login",{
                    username: userData.username,
                    password: userData.password,
                    })
                    .then((result) => {
                        console.log(result)
                        commit('authUser', result.data)
                        axios.defaults.headers.common['Authorization']
                        = 'Bearer' + result.data.token
                    })
                    .catch((error) => console.log(error))
            }
        }
    }
)
