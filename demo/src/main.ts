import App from './App'
import router from './router'
import { createApp } from 'vue'
import "./utils/rem"
import "@nutui/nutui/dist/style.css"
import './assets/scss/base.scss'
import { Button } from '@nutui/nutui';

createApp(App)
.use(Button)
.use(router)
.mount('#app')
