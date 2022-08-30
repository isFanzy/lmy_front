import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import contextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";
import Axios from "axios";
import axios from "axios";
import 'lib-flexible'
const app = createApp(App);
// @ts-ignore
app.use(store).use(ElementPlus).use(router).use(contextmenu).mount('#app')
app.config.globalProperties.$axios = axios;


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

