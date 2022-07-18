import axios from "axios";

const state = () => ({
  session: [],
  token: "",
});

const mutations= {
  setSession(state, param){
    state.session = param;
  },
  setToken(state, param) {
    localStorage.setItem('token', param)
  }
};

export const actions = {
  login (store, param) {
    return axios
    .post('http://54.255.189.230:8888/admins/login', {
      email: param.email,
      password: param.password,
    })
    .then((response) => {
      console.log("response: ", response)
      console.log("response token: ", response.data.token)

      const param = {
        token: response.data.token
      }

      store.commit("setToken", response.data.token)
    })
  },
  getAllsession(store){
    console.log("store:", store);
    console.log("token: ", store.state.token)
    return axios
    .get(`54.255.189.230:8888/sessions`, {
      headers: {
        "Content-type": "aplication/json",
        Authorization: "Bearer" + store.state.token,
      },
    })
    .then((response) => {
      console.log("response: ", response)

      return response.data;
    })
    .catch((error) => {
      store.commit("setinfo: ", error)
    })
  },
  register (store, param) {
    return axios
    .post('http://54.255.189.230:8888/admins', {
      email: param.email,
      password: param.password,
    })
    .then((response) => {
      console.log("response: ", response)
      console.log("response token: ", response.data.token)

      const param = {
        token: response.data.token
      }

      store.commit("setToken", response.data.token)
    })
  },
}

export default {actions, mutations, state};