/**
 * 全局自定义指令，统一入口
 */
import { App } from 'vue'
import debounce from './debounce'

export default {
  install(app: App<Element>): void {
    app.directive('debounce', debounce)
  }
}
