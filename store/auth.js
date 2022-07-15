import axios from "axios";

export const actions = {
  login (store, param) {
    return axios
    .post('54.255.189.230:8888/admins', {
      email: param.email,
      password: param.password,
    })
    .then((response) => {
      console.log("response: ", response)
    })
  }
}

export default { actions}