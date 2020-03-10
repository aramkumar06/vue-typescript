import { VNode } from 'vue/types/umd';

/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 09:38:59
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-06 14:20:38
 */
interface style {} // 选择 typecss

type Event = {};

type Permissions = {};

type Prop = {};

type Type = 'layout' | 'component' | 'text';

export interface component {
  id?: string;
  name: string;
  type: Type;
  css: style;
  permissions?: Permissions;
  prop?: Prop;
  component: any;
  children?: component[];
}

export interface page {
  name: string;
  id: string;
  event: Event;
  children: component[];
}
