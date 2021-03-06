/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-09 10:00:43
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-03 16:16:10
 */
import Vue from 'vue';
import App from '@/views/app';
import '@/assets/index.less';
import plugin from '@/utils/plugin';
import router from './router';
import store from './store';

Vue.use(plugin);
Vue.config.productionTip = false;
Vue.prototype.$ajax = 666;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
