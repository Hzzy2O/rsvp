import { AppRouteRecordRaw } from './../types';

export const Routes: Array<AppRouteRecordRaw> = [
  { path: '/', component: () => import('/@/views/Home/Index.vue') },
  { path: '/NotFound', component: () => import('/@/views/NotFound/404.vue') },
  { path: '/:catchAll(.*)', component: () => import('/@/views/NotFound/404.vue') },
];
