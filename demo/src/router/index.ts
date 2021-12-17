import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router'
import { Routes } from './routes'

// 开启历史模式
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: Routes
})

router.beforeEach((to, from, next) => {
  // const token = window.sessionStorage.getItem('Authorization')
  
  // if (to.path !== '/') {
  //   return next({
  //     path:'/NotFound'
  //   })
  // }
  next()
})
export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
