import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import contextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";
import axios from "axios";
import { createPinia } from 'pinia'
const app = createApp(App);
const pinia  = createPinia();
// @ts-ignore
app.use(ElementPlus).use(router).use(contextmenu).use(pinia).mount('#app')
app.config.globalProperties.$axios = axios;

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

