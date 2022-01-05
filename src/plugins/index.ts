import { App } from 'vue'
import components from './vant'
import Toast from './createToast'
import LoadingCom, { Loading } from './createLoading'

export default {
  install(app: App<Element>): void {
    components.forEach((component) => {
      app.component(component.name, component)
    })
    app.use(LoadingCom)
  }
}

// 插件统一导出插件使用 首字母大写，方便统一配置
export { Toast, Loading }
