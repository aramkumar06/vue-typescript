/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-09 14:19:53
 */

import { MutationTree } from 'vuex';
import { component } from '@/store/pageType';
import { deepCopy } from '@/utils';
import { State } from './type';

const mutations: MutationTree<State> = {
  SAVE_COMPONENT(state: State, opt: any) {
    state.compData.push(opt);
    console.log(state.compData);
  },
};
export default mutations;
