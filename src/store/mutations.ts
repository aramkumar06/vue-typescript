/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:16:20
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-19 13:43:23
 */
import { MutationTree } from 'vuex';
import { State, EDITMODEL } from './types';

const mutations: MutationTree<State> = {
  EDIT_MODEL(state: State, model: EDITMODEL) {
    state.EDITMODEL = model;
  },
};
export default mutations;
