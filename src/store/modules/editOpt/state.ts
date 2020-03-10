/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-12 10:41:52
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-12 14:01:08
 */
import { State } from './type';

const state: State = {
  EDITMODEL: 'edit', // 编辑器状态 预览 -- 编辑
  collapsed: false, // 侧边栏 是否展示
  CANVAS_SETTING: {
    // canvas setting 数据
    backgroundColor: '#000000',
    viewport: 'pc',
    scale: 100,
    height: '100%',
    width: '100%',
  },
  globalArgs: 'export default {\n \n}',
};
export default state;
