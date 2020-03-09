/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-09 10:32:25
 */

import { MutationTree } from 'vuex';
import { component } from '@/store/pageType';
import { State } from './type';

const lzString = require('lz-string');

// 加密 LZString.compress(string);
// 解密 LZString.decompress(compressed);

let pageData: any;

// 递归插入组件或布局
const addToChildrenFn = (
  arr: any[],
  opt: { component: component; parent: any },
) => {
  for (const item of arr) {
    if (item.id === opt.parent.id) {
      const id = opt.parent.treeId || opt.parent.id;
      const newData = Object.assign(opt.component, {
        treeId: lzString.compress(`${id}-${opt.component.id}`),
      });
      item.children.push(newData);
      break;
    } else if (item.type !== 'component') {
      addToChildrenFn(item.children, opt);
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
    addToChildrenFn([state.pageContent], opt);
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
  // 删除某一个组件 或者布局
  REMOVE_WHO(state: State, id: string) {
    console.log(lzString.decompress(id));
  },
};
export default mutations;
