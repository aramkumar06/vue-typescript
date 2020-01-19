/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-09 10:00:43
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-16 14:48:12
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './action';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {},
});
