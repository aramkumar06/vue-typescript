/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:16:20
 * @LastEditors  : wpp
 * @LastEditTime : 2020-02-13 16:29:49
 */
import { MutationTree } from 'vuex';
import { State } from './types';

const mutations: MutationTree<State> = {
  PAGE_CONTENT_ADD_LAYOUT(state: State, layout: any) {
    state.pageContent.layouts.push(layout);
  },

  LAYOUT_CHILDREN_ADD_COMPONENT(state: State, component: any) {
    //   stat
  },
};
export default mutations;
