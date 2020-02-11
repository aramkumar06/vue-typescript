/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:16:38
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-06 16:18:51
 */

import { GetterTree } from 'vuex';
import { State } from './types';

const getters: GetterTree<State, any> = {
  EDITMODEL: (state: State) => state.EDITMODEL,
  REDIOVAL: (state: State) => state.EDITSIDER.REDIOVAL,
};

export default getters;
