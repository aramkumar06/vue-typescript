/*
 * @Autor: wpp
 * @Date: 2020-02-12 14:11:04
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-06 11:12:58
 */
import { component } from './type';

const componentData: component[] = [
  {
    name: '卡片',
    type: 'component',
    css: {},
    component: 'card',
    permissions: {},
    prop: {},
  },
  {
    name: '柱形图',
    type: 'component',
    css: {},
    component: 'barcharts',
    permissions: {},
    prop: {},
  },
  {
    id: '',
    name: '布局块',
    type: 'layout',
    component: 'layout',
    css: {
      layoutStyle: {
        height: 100,
        width: '',
      },
    },
    children: [],
  },
  {
    name: '文字',
    type: 'component',
    css: {},
    component: '',
    permissions: {},
    prop: {},
  },
];

export default componentData;
