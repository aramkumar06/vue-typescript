/*
 * @Autor: wpp
 * @Date: 2020-02-17 14:14:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-02 17:24:06
 */
import { page, component, layout } from '../../pageType';
export { component, layout, page };
export interface State {
  pageContent: page;
  activeKey: string;
  activeData: any;
}
