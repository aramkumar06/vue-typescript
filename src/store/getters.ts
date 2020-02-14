/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:16:38
 * @LastEditors  : wpp
 * @LastEditTime : 2020-02-13 14:45:49
 */

import { GetterTree } from 'vuex';
import { State } from './types';

const getters: GetterTree<State, any> = {
  getPageContent(state: State) {
    return state.pageContent;
  },
};

export default getters;
