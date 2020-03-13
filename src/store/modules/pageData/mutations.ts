/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-13 16:28:50
 * 取消 treeid 加密
 */

import { MutationTree } from 'vuex';
import { component } from '@/store/pageType';
import { message } from 'ant-design-vue';
import { deepCopy, getId } from '@/utils';
import { State } from './type';

// const lzString = require('lz-string');
// 加密 LZString.compress(string);
// 解密 LZString.decompress(compressed);
// 存放临时页面数据
let pageData: any;

// 递归更新组件树id
const upDataTreeid = (arg: component, pId: string) => {
  // 组装组件id
  const compId = `custom${getId()}`;
  // 存放更新自定义组件数id前的组件树
  const treeData: component = Object.assign(arg, {
    id: compId,
    treeId: `${pId}-${compId}`,
  });
  function upDataId(data: component) {
    const treeId = data.treeId || data.id;
    for (const i in data.children) {
      const id = `base${getId()}`;
      data.children[i] = Object.assign(data.children[i], {
        id,
        treeId: `${treeId}-${id}`,
      });
      if (data.children[i].children && data.children[i].children.length > 0) {
        upDataId(data.children[i]);
      }
    }
  }
  upDataId(treeData);
  return treeData;
};

// 递归插入组件或布局
const addToChildrenFn = (
  arr: any[],
  opt: { component: component; parent: any },
) => {
  for (const item of arr) {
    if (item.id === opt.parent.id) {
      const id = opt.parent.treeId ? opt.parent.treeId : opt.parent.id;
      let newData;
      if (opt.component.type === 'custom') {
        // 组装组件需要更新整棵组装组件树的id与treeid
        newData = upDataTreeid(deepCopy(opt.component), id);
        console.log('组装组件');
      } else {
        newData = Object.assign(opt.component, {
          treeId: `${id}-${opt.component.id}`,
        });
      }
      item.children.push(newData);

      break;
    } else if (item.type !== 'component') {
      addToChildrenFn(item.children, opt);
    }
  }
};

// 记录删除时每一层及的key
let treeIds: number[] = [];
const getKeyTree = (who: any[], id: string) => {
  let n: number = 0;
  for (const i of who) {
    n += 1;
    if (i.id === id) {
      treeIds.push(n - 1);
    }
    if (i.children) {
      getKeyTree(i.children, id);
    }
  }
};

// 获取操作位置
const getActiveData = (who: any[], id: string) => {
  let n: number = 0;
  for (const i of who) {
    n += 1;
    if (i.id === id) {
      pageData = i;
      treeIds.push(n - 1);
    }
    if (i.children) {
      getActiveData(i.children, id);
    }
  }
};
// 根据id获取当前下标 tress 数组进行优化递归查询
const getKeyById = (id: string, trees: number[]) => {
  // let keyId = 0;
  // 保留代码优化递归方案
  // if (trees.length <= 0) {
  //   keyId = 0;
  // } else {
  //   // 查询到已知key
  //   for (const i in trees) {
  //     if (Number(i) !== 0) {
  //       pageData = pageData.children[trees[i]];
  //     }
  //   }
  //   console.log(pageData);
  //   // 设置未设置的key 位置
  //   for (const i in pageData.children) {
  //     // console.log(id);
  //     if (pageData.children[i].id === id) {
  //       keyId = Number(i);
  //     }
  //   }
  // }
  // return keyId;
};

// 删除
const remove = (id: string) => {
  const ids = id.split('-');
  const useId = ids.splice(ids.length - 1, 1);
  let state: boolean = false;
  treeIds = [];
  for (const i in ids) {
    getKeyTree(deepCopy(pageData.children), ids[i]);
  }

  for (const i in treeIds) {
    state = true;
    pageData = pageData.children[treeIds[i]];
  }

  if (!state) {
    message.warning('最外级不可删除.');
  }

  for (const i in pageData.children) {
    if (pageData.children[i].id === useId[0]) {
      pageData.children.splice(i, 1);
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
    pageData = state.pageContent;
    remove(id);
    setTimeout(() => {
      state.activeData = pageData;
    }, 100);
  },
};
export default mutations;
