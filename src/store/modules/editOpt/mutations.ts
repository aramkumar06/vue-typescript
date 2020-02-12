/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-12 10:37:00
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-12 14:21:03
 */
import { MutationTree } from 'vuex';
import { State, EDITMODEL, CANVAS_SETTING } from './type';

const mutations: MutationTree<State> = {
  EDIT_MODEL(state: State, model: EDITMODEL) {
    state.EDITMODEL = model;
  },
  MUT_COLLAPSED(state: State, collapsed: boolean) {
    state.collapsed = collapsed;
  },
  SET_CANVAS_SETTING(state: State, canvasSetting: CANVAS_SETTING) {
    state.CANVAS_SETTING = canvasSetting;
  },
  SETGLOBALARGS(state: State, globalArgs: string) {
    state.globalArgs = globalArgs;
  },
};
export default mutations;
