/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-09 10:00:43
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-13 16:37:03
 */

/* eslint-disable */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import routers from './routers';

Vue.use(VueRouter);
const routes: RouteConfig[] = routers;
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  next();
});
export default router;
