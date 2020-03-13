<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-12 13:45:57
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-12 13:54:50
 -->
# 马良整体数据结构规划

    项目：
        模块
            页面
                组价 

## 项目

``` typescript
export interface project {
  name: string;
  global_args: Object;
  setting: Object;
  module: Array<Module>;
  // ...
}
```

## 模块
``` typescript
export interface Module extends Object {
  pages: Array<page>;
  name: string;
  id: string;
  ...;
}
```

## 页面
``` typescript
export interface page {
  name: string;
  id: string;
  Event: Event;
  data_panel: DataPanel;
  children: comp[];
}
```

## 组件、组装组件
```typescript
// 组件数据结构
export interface comp {
  id: string;
  treeId: string;
  type: 'layout' | 'base' | 'custom' | 'system';
  compName: string;
  css: typestyle;
  prop: Object;
  children?: comp[];
  Permissions: Permissions;
}

// 组件列表
const compTree = Array<comp>;
```
