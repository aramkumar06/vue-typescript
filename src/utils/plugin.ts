/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-10 14:50:19
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-13 16:37:25
 */
/* eslint-disable */
import ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// eslint-disable-next-line
import { VueConstructor } from 'vue/types/umd';

export default {
  install(Vue: VueConstructor) {
    Vue.use(ant);
  },
};
