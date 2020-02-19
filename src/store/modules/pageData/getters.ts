/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-02-19 11:27:45
 */

import { GetterTree } from 'vuex';
import { State } from './type';

const getters: GetterTree<State, any> = {
  getPageContent(state: State) {
    return state.pageContent;
  },
  ACTIVEKEY: (state: State) => state.activeKey,
};
export default getters;
