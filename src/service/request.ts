import axios, { AxiosPromise } from 'axios'
import { ENV } from './env'
import { Loading, Toast } from '@/plugins'
import { Options } from '@/types/common/request'
import route from '@/router/index'
import store from '@/store/index'

axios.interceptors.request.use(
  (config) => {
    if (route.currentRoute.value.query.t) {
      store.commit('user/setToken', route.currentRoute.value.query.t)
    }
    if (store.state.user.token) config.headers.token = store.state.user.token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    Toast(`${error.message || '服务器开小差儿，请稍后再试！'}`)
    Loading.hide()
    return Promise.reject(error)
  }
)

export default function request(url = '', params = {}, options: Options = {}): Promise<AxiosPromise> {
  const defaultOptions = {
    baseUrl: options.baseUrl ? options.baseUrl : ENV.BASE_URL,
    method: 'post',
    showLoading: true,
    contentType: 'application/json'
  }
  const { method, showLoading, contentType } = Object.assign(defaultOptions, options)

  if (showLoading) {
    Loading.show()
  }

  const config = {
    url: `${defaultOptions.baseUrl}${url}`,
    method: method,
    data: contentType === 'multipart/form-data' ? params : JSON.stringify(params),
    headers: {
      'Content-Type': contentType
    },
    xhrFields: { withCredentials: true },
    dataType: 'json'
  }

  return new Promise((resolve, reject) => {
    axios(config)
      .then((res) => {
        if (showLoading) {
          Loading.hide()
        }
        const data = res.data
        if (res.status === 200 && data.resultCode === '0') {
          resolve(data)
        } else {
          Toast(data.message || '服务器开小差儿，请稍后再试！')
          reject(res.data)
        }
      })
      .catch((error) => {
        if (showLoading) {
          Loading.hide()
        }
        reject(error)
      })
  })
}
