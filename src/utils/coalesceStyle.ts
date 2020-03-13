/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-05 15:02:39
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-05 15:27:46
 */
import baseData from '@/utils/baseData/style.template';
import { deepCopy } from '@/utils';
import { style } from '@/types/style';

export default (styles: style) => {
  const newStyle = deepCopy(baseData);
  for (const i in newStyle) {
    for (const n in styles) {
      if (i === n) {
        // 子集融合
        newStyle[i] = Object.assign(newStyle[i], styles[n]);
      }
    }
  }
  return newStyle;
};
