/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:16:20
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-14 11:03:58
 */
import { MutationTree } from 'vuex';
import { State } from './types';

const mutations: MutationTree<State> = {
  PAGE_CONTENT_ADD_LAYOUT(state: State, layout: any) {
    state.pageContent.children.push(layout);
  },

  LAYOUT_CHILDREN_ADD_COMPONENT(state: State, component: any) {
    //   stat
  },
};
export default mutations;
