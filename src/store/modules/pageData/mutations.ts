/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-02-19 11:28:48
 */

import { MutationTree } from 'vuex';
import { State } from './type';

const addToChildrenFn = (arr: any[], id: string, obj: any) => {
  for (const item of arr) {
    if (item.id === id) {
      item.children.push(obj);
      break;
    } else if (item.type !== 'component') {
      addToChildrenFn(item.children, id, obj);
    }
  }
};

const mutations: MutationTree<State> = {
  ADD_TO_CHILDREN(state: State, opt: any) {
    addToChildrenFn([state.pageContent], opt.parentId, opt.component);
    state.pageContent = { ...state.pageContent };
  },
  SET_ACTIVEKEY(state: State, key: string) {
    state.activeKey = key;
  },
};
export default mutations;
