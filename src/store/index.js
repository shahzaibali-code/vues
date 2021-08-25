import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import api from '../Static/Api';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: null,
    Token: null,
    STATUS: 'LOGIN',
    Loading: false,
  },
  mutations: {
    login(state, payload) {
      state.Login = payload.login;
      state.Token = payload.Token;
      state.Loading = false;
    },
    Loading(state, data) {
      state.Loading = data;
    }
  },
  actions: {
    UserLogin(context, { username, password }) {
      context.commit('Loading', true);
      const url = api.BaseURL + '/login';

      var formdata = new FormData();
      formdata.append("cpf", username);
      formdata.append("password", password);

      axios
        .post(url, formdata)
        .then(r => {

          console.log(r);
          if (r.status) {
            if (r.data.token) {
              localStorage.setItem("Gvtoken", r.data.token);
              localStorage.setItem("LoginStatus", "HOME");
              context.commit('login', { login: "HOME", Token: r.data.token });

            }
          }



        }, (error) => {
          console.log("login", error);
        });

    },
  },
  modules: {
  }
});
