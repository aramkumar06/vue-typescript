/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:16:20
 * @LastEditors  : wpp
 * @LastEditTime : 2020-02-14 16:00:54
 */
import { MutationTree } from 'vuex';
import { State } from './types';
import { layout } from '../utils/baseData/type';

const mutations: MutationTree<State> = {
  PAGE_CONTENT_ADD_LAYOUT(state: State, layoutComponent: any) {
    state.pageContent.children.push(layoutComponent);
  },

  LAYOUT_CHILDREN_ADD_COMPONENT(state: State, opt: any) {
    for (const item of state.pageContent.children) {
      if (item.id === opt.currentLayout.id) {
        (item as layout).children.push(opt.component);
        break;
      }
    }
    console.log(123, state.pageContent);
  },
};
export default mutations;
