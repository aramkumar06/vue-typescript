/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 09:38:59
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-03 13:56:15
 */
interface style {} // 选择 typecss

type children = component[] | layout[];

type Event = {};

type Permissions = {};

type Prop = {};

type Type = 'layout' | 'component';

export interface layout {
  id: string;
  name: string;
  type: string;
  css: style;
  children: children;
}

export interface component {
  id?: string;
  name: string;
  type: Type;
  css: style;
  permissions: Permissions;
  prop: Prop;
}

export interface page {
  name: string;
  id: string;
  event: Event;
  children: children;
}
