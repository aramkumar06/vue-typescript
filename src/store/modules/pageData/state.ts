/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-13 16:04:28
 */
import { State } from './type';

const lzString = require('lz-string');

const state: State = {
  pageContent: {
    name: '加药详情1',
    id: 'page',
    treeId: 'page',
    type: 'page',
    css: {},
    permissions: {},
    prop: {},
    children: [],
    event: [],
    data_panel: {},
  },
  activeKey: 0,
  activeData: {},
};
export default state;
