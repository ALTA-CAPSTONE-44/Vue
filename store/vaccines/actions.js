import axios from "axios";

export default {
     handleGetStock(store){
        let url =  `http://54.255.189.230:8888/vaccines`
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',

            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        axios.get(url,{ headers: headers }) 
        .then(response => {
           store.commit('setStock',response.data.vaccine)
        })
    },
    handleSession(store){
        let url =  `http://54.255.189.230:8888/sessions`
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',

            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        axios.get(url,{ headers: headers }) 
        .then(response => {
           store.commit('setSession',response.data.sessions)
        })
    }
}