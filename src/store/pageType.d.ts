/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 09:38:59
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-09 09:45:19
 */
interface style {} // 选择 typecss

type Event = {};

type Permissions = {};

type Prop = {};

type Type = 'layout' | 'component';

// export interface layout {
//   id: string;
//   name: string;
//   type: string;
//   style: style;
//   children: children;
// }

export interface component {
  id?: string;
  treeId?: string;
  name: string;
  type: Type;
  style: style;
  permissions: Permissions;
  prop: Prop;
  children?: component[];
}

export interface page {
  name: string;
  id: string;
  event: Event;
  children: component[];
}
