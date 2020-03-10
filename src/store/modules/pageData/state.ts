/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-10 13:09:44
 */
import { State } from './type';

const state: State = {
  pageContent: {
    name: '加药详情1',
    id: 'page',
    children: [],
    event: [],
    sourceData: {}, // 界面可使用数据
    editData: [
      {
        key: 'y00001',
        _name: '新文字',
        type: '',
        id: '1',
        pid: '0',
        val: '哈哈哈',
      },
      {
        key: 'y00002',
        _name: '新文字-1',
        type: '',
        id: '1-1',
        pid: '1',
        val: '哈哈哈',
      },
      {
        key: 'y00003',
        _name: '电流值',
        type: '',
        id: '2',
        pid: '0',
        val: '12',
      },
    ], // 页面编辑数据
  },
  activeKey: '',
  activeData: {},
};
export default state;
