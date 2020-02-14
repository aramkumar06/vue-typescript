/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 09:38:59
 * @LastEditors  : wpp
 * @LastEditTime : 2020-02-14 15:32:25
 */
interface style {} // 选择 typecss

type children = component[] | layout[];

type Event = {};

type Permissions = {};

type Prop = {};

export interface layout {
  id: string;
  name: string;
  type: string;
  style: style;
  children: children;
}

export interface component {
  id?: string;
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
