/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 09:38:59
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-14 10:33:59
 */
interface style {} // 选择 typecss

type children = component[] | layout[];

type Event = {};

type Permissions = {};

type Prop = {};

export interface layout {
  id: string;
  name: string;
  style: style;
  children: children;
}

export interface component {
  name: string;
  type: string;
  style: style;
  permissions: Permissions;
  prop: Prop;
}

export interface page {
  name: string;
  id: string;
  event: Event;
  children: children;
}
