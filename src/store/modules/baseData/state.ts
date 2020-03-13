/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-02 17:16:24
 */
import util, { deepCopy } from '@/utils';
import { State } from './type';

const compData = deepCopy(util.compData);

const state: State = {
  compData,
};
export default state;
