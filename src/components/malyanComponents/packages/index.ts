/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 10:14:48
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-06 09:54:47
 */
import layout from './layout';
import card from './card';

const components: Vue.Component[] = [layout, card];

export const comp = {
  layout,
  card,
};

export default components;
