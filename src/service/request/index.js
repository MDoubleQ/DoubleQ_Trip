import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import useMainStore from '@/stores/index'
class DQRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use((config) => {
      useMainStore.state.main.isShowAnimate= true
      return config
    }, err => {
      return err
    })

    this.instance.interceptors.response.use((res) => {
      useMainStore.state.main.isShowAnimate= false
      return res
    }, err => {
      useMainStore.state.main.isShowAnimate= false
      return err
    } )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new DQRequest(BASE_URL, TIMEOUT)