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
    path: '/upload',
    name: 'upload',
    component: () => import('../components/PC/upLoad.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
