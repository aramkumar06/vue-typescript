/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-13 13:33:07
 */
import { page, component } from '../../pageType';
export { component, page };
export interface State {
  pageContent: page;
  activeKey: number | string;
  activeData: any;
}
