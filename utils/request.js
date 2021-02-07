import axios from 'axios'
import cookie from 'js-cookie'
import {MessageBox, Message} from 'element-ui'

const service = axios.create({
  baseURL: "http://localhost:9001",
  timeout: 20000
})


service.interceptors.request.use(
  config => {
    if (cookie.get('guli_token')) {
      config.headers['token'] = cookie.get('guli_token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)


export default service
