import App from './App'
import router from './router'
import { createApp } from 'vue'
import "@nutui/nutui/dist/style.css";
import { Button, Icon } from "@nutui/nutui";

createApp(App)
.use(Icon)
.use(router).mount('#app')
