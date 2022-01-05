/**
 * @des 路由模块
 * @param {String} title meta document.title字段
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home.vue')
  },

  {
    path: '/test-father',
    name: 'test-father',
    component: () => import('@/views/test/Index.vue'),
    children: [
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/test/Test.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/Test.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: 'NotFound' },
    component: () => import('@/views/404.vue')
  }
]

export { routes }
