/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 09:38:59
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-10 11:09:51
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

export interface editData {
  _name: string; // 用户手动填写
  key: string; // 通过生成器生成
  type: string | object | [] | boolean | number; // 类型记录该值类型 string number object array boolean
  val: string; // 记录值
  id: string;
  pid: string;
  children?: editData[];
}

export interface page {
  name: string;
  id: string;
  event: Event;
  sourceData: any;
  editData: editData[];
  children: component[];
}
