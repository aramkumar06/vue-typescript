/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-14 09:46:24
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-14 10:23:27
 */
import components from './packages';

const install = (Vue: any) => {
  components.forEach((component) =>
    Vue.component(component.name, (component as any).install),
  );
};

export default {
  install,
  version: '0.0.1',
};
