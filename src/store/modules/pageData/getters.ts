/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: wpp
 * @LastEditTime: 2020-02-17 14:16:44
 */

import { GetterTree } from 'vuex';
import { State } from './type';

const getters: GetterTree<State, any> = {
  getPageContent(state: State) {
    return state.pageContent;
  },
};
export default getters;
