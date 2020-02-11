/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-06 16:46:59
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-07 14:27:27
 */
import { GetterTree, MutationTree, ActionTree } from 'vuex';

export type EDITMODEL = 'edit' | 'preview';

export interface State {
  EDITMODEL: EDITMODEL;
  REDIOVAL: string;
  collapsed: boolean;
}
const state: State = {
  EDITMODEL: 'edit',
  REDIOVAL: 'componentList',
  collapsed: false,
};

const mutations: MutationTree<State> = {
  EDIT_MODEL(state: State, model: EDITMODEL) {
    state.EDITMODEL = model;
  },
  MUT_COLLAPSED(state: State, collapsed: boolean) {
    state.collapsed = collapsed;
  },
};

const actions: ActionTree<State, any> = {
  SET_EDIT_MODEL({ commit }, model: EDITMODEL) {
    commit('EDIT_MODEL', model);
  },
  SET_COLLAPSED({ commit }, collapsed: boolean) {
    commit('COLLAPSED', collapsed);
  },
};

const getters: GetterTree<State, any> = {
  EDITMODEL: (state: State) => state.EDITMODEL,
  COLLAPSED: (state: State) => state.collapsed,
};

export default {
  namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
  state,
  mutations,
  actions,
  getters,
};
