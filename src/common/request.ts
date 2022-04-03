import axios from 'axios'
import { message } from 'antd';

const service = axios.create({
  // baseURL: '',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      message.error(res.message)
    } else {
      return res
    }
  },
  error => {
    message.error(error.message)
    return Promise.reject(error)
  }
)

export default service