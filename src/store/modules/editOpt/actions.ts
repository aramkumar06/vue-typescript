/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-12 10:43:02
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-02-12 10:43:45
 */
import { ActionTree } from 'vuex';
import { State, EDITMODEL } from './type';

const actions: ActionTree<State, any> = {
  SET_EDIT_MODEL({ commit }, model: EDITMODEL) {
    commit('EDIT_MODEL', model);
  },
  SET_COLLAPSED({ commit }, collapsed: boolean) {
    commit('COLLAPSED', collapsed);
  },
};

export default actions;
