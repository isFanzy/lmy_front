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
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../components/PC/test.vue')
  },
  {
    path: '/scanFiles',
    name: 'scanFiles',
    component: () => import('../views/Home/mainComponent/scanAllFiles.vue')
  },

  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  },
]


// const fileRoute : Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'loginView',
//     component: () => import('../components/PC/HelloWorld.vue')
//   },
// ]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
