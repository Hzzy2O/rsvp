import App from './App'
import router from './router'
import { createApp } from 'vue'
import "./utils/rem"
import "@nutui/nutui/dist/style.css";
import './assets/css/base.less'
import { Button, Icon } from "@nutui/nutui";

createApp(App)
.use(Icon)
.use(router).mount('#app')
