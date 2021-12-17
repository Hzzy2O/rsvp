import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import { defineComponent } from 'vue';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  path: string;
  component: Component | string;
  name?: string;
  meta?: RouteMeta;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
}

export type AppRouteModule = AppRouteRecordRaw;