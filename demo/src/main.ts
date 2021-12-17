import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from '/@/store'
import { setupRouter } from '/@/router';


function initApp() {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  app.mount('#app')
}

initApp()
