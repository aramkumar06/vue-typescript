/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:15:46
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-06 14:12:44
 */
export type EDITMODEL = 'edit' | 'preview';
export interface EDITSIDER {
  REDIOVAL: string;
}
export interface State {
  EDITMODEL: EDITMODEL;
  EDITSIDER: EDITSIDER;
}
