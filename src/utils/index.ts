/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-07 15:21:13
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-03 16:33:42
 */
import editDefaultVal from './editDefaultCode';
import baseData from './baseData';

export const deepCopy = (source: any): any => {
  const target = Array.isArray(source) ? [] : {};
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        target[key] = deepCopy(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};

export default {
  editDefaultVal,
  ...baseData,
};
