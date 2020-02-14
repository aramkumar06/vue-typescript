/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-10 14:50:19
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-14 10:24:11
 */
/* eslint-disable */
import ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as monaco from 'monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution';
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution';
// ctrl + f查找功能
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';
// eslint-disable-next-line
import { VueConstructor } from 'vue/types/umd';
import malyan from '@/components/malyanComponents';

export default {
  install(Vue: VueConstructor) {
    Vue.use(ant);
    Vue.use(malyan);
    Vue.prototype.$Editor = monaco;
  },
};
