import { createApp, reactive } from 'vue'
import LoadingCom from 'com/common/loading/Loading.vue'

const loadingProps = reactive({
  showLoading: false,
  loadingType: ''
})

const $loading = createApp(LoadingCom, { loadingProps }).mount(document.createElement('div'))

export const Loading = {
  show(loadingType?: string) {
    loadingProps.showLoading = true
    loadingProps.loadingType = loadingType ? loadingType : ''
    document.body.appendChild($loading.$el)
  },
  hide() {
    loadingProps.showLoading = false
  }
}

export default {
  install(app: any) {
    this.initLoading(app)
  },

  initLoading(app: { config: { globalProperties: { $loading: any } } }) {
    app.config.globalProperties.$loading = Loading
  }
}
