import { createStore } from 'vuex'
import { cookie, instance } from './utils'

let bodyFormData = new FormData()

const SET_AUTH = "setAuth"
const SET_COOKIES = "setCookies"
const SET_INFO = "setInfo"
const SET_HEADERS = "setHeaders"
const DELET_HEADERS = "deletHeaders"
const DELET_COOKIES = "deletCookies"
const CLEAR_INFO = "clearInfo"

export default createStore({
  state: {
    auth: 'NO',
    info: '',
  },
  mutations: {
    setAuth(state, data) {
      // console.log("setAuth", data)
      state.auth = data
    },
    setCookies(state, data) {
      // console.log("setCookies", data)
      cookie.set("mcc", {'Authorization': data})
    },
    setInfo(state, data) {
      // console.log("setInfo", data)
      state.info = data
    },
    setHeaders(state, data) {
      // console.log("setHeaders", data)
      instance.defaults.headers = {'Authorization': data}
    },
    deletHeaders(state) {
      // console.log("deletHeaders")
      instance.defaults.headers = {}
      state.auth = "NO"
    },
    deletCookies() {
      // console.log("deletCookies")
      cookie.remove('mcc')
    },
    clearInfo(state) {
      // console.log("clearInfo")
      state.info = ''
    }
  },
  actions: {
    checkCookie(context) {
      if (cookie.isKey("mcc")) {
        context.commit(SET_AUTH, "YES");
        context.commit(SET_HEADERS, cookie.get("mcc").Authorization);
      } else {
        context.commit(SET_AUTH, "Please log in");
      }
    },
    // async logIn(context, data) {
    //   context.commit(SET_AUTH, "PENDING");
    //   bodyFormData.append('username', data.user)
    //   bodyFormData.append('password', data.pass)

    //   const res = await instance.post("token", bodyFormData, { "Content-Type": "multipart/form-data" })
    //   const token = res.data.token_type + " " + res.data.access_token
    //   context.commit(SET_AUTH, "YES");
    //   context.commit(SET_COOKIES, token);
    //   context.commit(SET_HEADERS, token); 
    // },
    logIn(context, data) {
      context.commit(SET_AUTH, "PENDING");
      bodyFormData.append('username', data.user)
      bodyFormData.append('password', data.pass)

      instance.post("token", bodyFormData, { "Content-Type": "multipart/form-data" }).then(res => {
        const token = res.data.token_type + " " + res.data.access_token
        context.commit(SET_AUTH, "YES")
        context.commit(SET_COOKIES, token)
        context.commit(SET_HEADERS, token) })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("response.data", error.response.data);
            console.log("response.status)", error.response.status);
            console.log("response.headers", error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log("request", error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log("config", error.config);
        })
    },
    queryTo(context) {
      console.log('queryTo')
      instance.get('api/v3/users/me/').then(response => (context.commit(SET_INFO, response.data)))
    },
    logOut(context) {
      console.log('logOut')
      context.commit(DELET_HEADERS)
      context.commit(DELET_COOKIES)
      context.commit(CLEAR_INFO)
    },
  },
  getters: {
    getAuth: state => state.auth,
    getInfo: state => state.response,
  },
})
