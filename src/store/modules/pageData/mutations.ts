/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-03 10:00:17
 */

import { MutationTree } from 'vuex';
import { State } from './type';

let pageData: any;

// 递归插入组件或布局
const addToChildrenFn = (arr: any[], id: string, obj: any) => {
  for (const item of arr) {
    if (item.id === id) {
      console.log(obj);
      item.children.push(obj);
      break;
    } else if (item.type !== 'component') {
      addToChildrenFn(item.children, id, obj);
    }
  }
};

// 获取操作位置
const getActiveData = (who: any[], id: string) => {
  for (const i of who) {
    if (i.id === id) {
      pageData = i;
    }
    if (i.children) {
      getActiveData(i.children, id);
    }
  }
};

const mutations: MutationTree<State> = {
  ADD_TO_CHILDREN(state: State, opt: any) {
    addToChildrenFn([state.pageContent], opt.parentId, opt.component);
    // 设置 activekey
    state.activeKey = opt.component.id;

    // 设置 active data
    state.activeData = opt.component;

    state.pageContent = { ...state.pageContent };
  },
  SET_ACTIVEKEY(state: State, key: string) {
    pageData = state.pageContent;
    state.activeKey = key;
    getActiveData(pageData.children, key);
    state.activeData = pageData;
  },
  SET_STYLE(state: State, activeData: any) {
    state.activeData = activeData;
  },
};
export default mutations;
