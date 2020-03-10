/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-02-19 11:27:45
 */

import { GetterTree } from 'vuex';
import { State } from './type';

const getters: GetterTree<State, any> = {
  getBaseData(state: State) {
    return state.compData;
  },
};
export default getters;
