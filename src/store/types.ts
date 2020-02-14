/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-16 12:15:46
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-14 10:36:27
 */
import { page } from '@/utils/baseData/type';

export type EDITMODEL = 'edit' | 'preview';
export interface EDITSIDER {
  REDIOVAL: string;
}
export interface State {
  pageContent: page;
}
