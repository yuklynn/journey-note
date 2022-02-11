import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: () => import(/* webpackChunkName: "note" */ '../views/Note.vue'),
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () =>
      import(
        /* webpackChunkName: "notification" */ '../views/Notification.vue'
      ),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () =>
      import(/* webpackChunkName: "setting" */ '../views/Setting.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
