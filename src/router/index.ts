import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
//import scanFiles from '@/views/Home/mainComponent/scanAllFiles.vue'
// import scanAllPhotos from '@/views/Home/mainComponent/scanAllPhotos.vue'
// import scanAllCash from '@/views/Home/mainComponent/scanAllCash.vue'
// import scanAllFavorite from '@/views/Home/mainComponent/scanAllFavorite.vue'
// import scanAllLoadings from '@/views/Home/mainComponent/scanAllFiles.vue'
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
