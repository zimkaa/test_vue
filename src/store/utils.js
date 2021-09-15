import axios from 'axios'
import VueCookies from 'vue-cookies'

VueCookies.config('1d')

const instance = axios.create({
  baseURL: 'baseURL',
  // withCredentials: true,
});

export { VueCookies as cookie, instance }
