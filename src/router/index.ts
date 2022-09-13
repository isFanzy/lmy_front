import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import {useBucketsStore} from "@/Pinia/store/bucket";
import {storeToRefs} from "pinia";

const bucket = storeToRefs(useBucketsStore()).path;

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
if (bucket.value != null)
// 路由守卫
router.beforeEach((to, from, next) => {

})

export default router
