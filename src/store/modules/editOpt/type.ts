/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-12 10:38:03
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-12 13:59:24
 */
export type EDITMODEL = 'edit' | 'preview';
export type viewport = 'pc' | 'iphone7' | 'iphonex';

export interface CANVAS_SETTING {
  backgroundColor: string;
  viewport: viewport;
  scale: number;
  width: string;
  height: string;
}

export interface State {
  EDITMODEL: EDITMODEL;
  collapsed: boolean;
  CANVAS_SETTING: CANVAS_SETTING;
  globalArgs: string;
}
