import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://web.builtaccounting.com/api/'
axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token
axios.defaults.headers.common.Accept = 'application/json'

axios.defaults.headers.post['Content-Type'] = 'application/json'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

Vue.prototype.$axios = axios
