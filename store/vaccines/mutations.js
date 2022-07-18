import axios from 'axios';
export default {
    setStock(state,param){
        state.vaccines = param
    },
    setSession(state,param){
        state.sessions = param
    }
}