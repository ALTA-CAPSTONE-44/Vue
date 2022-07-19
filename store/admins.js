import axios from "axios";

export const state = () => ({
    users: [],
    admins: [],
})

export const mutations = {
    getUsers(state,param){
        state.users = param
    },
    getAdmins(state,param){
        state.admins = param
    },
}

export const actions = {
     handleAllUsers(store){
        let url =  `http://54.255.189.230:8888/users`
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',

            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        axios.get(url,{ headers: headers }) 
        .then(response => {
           store.commit('getUsers', response.data.user)
        })
    },
     handleAllAdmins(store){
        let url =  `http://54.255.189.230:8888/admins`
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',

            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        axios.get(url,{ headers: headers }) 
        .then(response => {
           store.commit('getAdmins', response.data.admin)
        })
    },
}

export default {actions, mutations, state};