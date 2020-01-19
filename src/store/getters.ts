/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:16:38
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-16 14:48:24
 */

import { GetterTree } from 'vuex';
import { State } from './types';

const getters: GetterTree<State, any> = {
  EDITMODEL: (state: State) => state.EDITMODEL,
};

export default getters;
