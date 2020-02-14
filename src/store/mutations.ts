/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:16:20
<<<<<<< HEAD
 * @LastEditors  : wpp
 * @LastEditTime : 2020-02-14 15:38:19
=======
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-14 11:03:58
>>>>>>> 0b3c2a3ff925f13b6926e5ebc9f358baead93c42
 */
import { MutationTree } from 'vuex';
import { State } from './types';
import { layout } from '../utils/baseData/type';

const mutations: MutationTree<State> = {
<<<<<<< HEAD
  PAGE_CONTENT_ADD_LAYOUT(state: State, layoutComponent: any) {
    state.pageContent.children.push(layoutComponent);
=======
  PAGE_CONTENT_ADD_LAYOUT(state: State, layout: any) {
    state.pageContent.children.push(layout);
>>>>>>> 0b3c2a3ff925f13b6926e5ebc9f358baead93c42
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
