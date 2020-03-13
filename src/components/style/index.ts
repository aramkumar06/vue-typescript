/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-28 13:29:07
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-02-28 15:16:39
 */
import radioFroupLabel, { labelMap, bhabgsLabel } from './radioGroupLabel';
import colorInput from './colorInput';
import edit from './code_edit';
import Tip from './tip';
import SliderInput from './sliderInput';

const components = [
  {
    name: 'radioFroupLabel',
    install: radioFroupLabel,
  },
  {
    name: 'SliderInput',
    install: SliderInput,
  },
  {
    name: 'tip',
    install: Tip,
  },
  {
    name: 'bhabgsLabel',
    install: bhabgsLabel,
  },
  {
    name: 'colorInput',
    install: colorInput,
  },
  {
    name: 'edit',
    install: edit,
  },
];

const install = (Vue: any) => {
  components.forEach((component) =>
    Vue.component(component.name, (component as any).install),
  );
};
export default { install };
