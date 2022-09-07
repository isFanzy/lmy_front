import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'loginView',
    component: () => import('../components/PC/HelloWorld.vue')
  },
  {
    path: '/homeView',
    name: 'homeView',
    component: () => import('../components/PC/fileSystem.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/PC/test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
