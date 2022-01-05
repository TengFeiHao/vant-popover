import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router'
import { ENV } from '@/service/env'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_SRC as string),
  routes: routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title}-${ENV.PROJEXT_NAME}` : ENV.PROJEXT_NAME
})

export default router
