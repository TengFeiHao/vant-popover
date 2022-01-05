import '@/assets/style/normalize.scss'
import 'amfe-flexible'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store'
import plugins from '@/plugins'
import directives from '@/directives'
import VConsole from 'vconsole'
import { getUrlParam } from 'util/index'

if (getUrlParam('debugger') === '1') {
  new VConsole()
}

const app = createApp(App)

app.use(router).use(store).use(plugins).use(directives)
router.isReady().then(() => app.mount('#app'))
