import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Notifications from '@kyvg/vue3-notification'

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL || '';
const app =  createApp(App);
app.config.globalProperties.mode = 'production';
app.use(VueRouter);
app.use(Notifications);

app.mount('#app');
