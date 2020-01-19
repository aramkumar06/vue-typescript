/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:16:07
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-16 14:24:49
 */
import { ActionTree } from 'vuex';
import { State, EDITMODEL } from './types';

const actions: ActionTree<State, any> = {
  SET_EDIT_MODEL({ commit, state }, model: EDITMODEL) {
    commit('EDIT_MODEL', model);
  },
};

export default actions;
