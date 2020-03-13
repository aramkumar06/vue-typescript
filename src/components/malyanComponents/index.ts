/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 09:46:24
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-06 09:55:17
 */
import components, { comp } from './packages';

const install = (Vue: any) => {
  components.forEach((component) =>
    Vue.component(component.name, (component as any).install),
  );
};

export { comp };

export default {
  install,
  version: '0.0.1',
};
