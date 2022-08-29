import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Axios from "axios";
import axios from "axios";

const app = createApp(App);
app.use(store).use(ElementPlus).use(router).mount('#app')
app.config.globalProperties.$axios = axios;


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

