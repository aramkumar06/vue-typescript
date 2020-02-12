/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-12 10:44:27
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-12 14:01:39
 */
import { GetterTree } from 'vuex';
import { State } from './type';

const getters: GetterTree<State, any> = {
  EDITMODEL: (state: State) => state.EDITMODEL,
  COLLAPSED: (state: State) => state.collapsed,
  CANVAS_SETTING: (state: State) => state.CANVAS_SETTING,
  globalArgs: (state: State) => state.globalArgs,
};
export default getters;
