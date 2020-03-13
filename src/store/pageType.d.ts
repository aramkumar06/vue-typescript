/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 09:38:59
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-13 15:00:51
 */
interface style {} // 选择 typecss

type Event = {};

type Permissions = {};

type Prop = {};

type Type = 'layout' | 'base' | 'custom' | 'system';

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
  css: style;
  permissions: Permissions;
  prop: Prop;
  children?: component[];
}

export interface page extends component {
  event: Event;
  data_panel: {};
}
