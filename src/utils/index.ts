/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-07 15:21:13
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-03 13:52:08
 */
import editDefaultVal from './editDefaultCode';
import baseData from './baseData';

export default {
  editDefaultVal,

  STRING_STYLE_TO_JSON(a: string) {
    return a;
  },
  JSON_STYLE_TO_STRING(a: object) {
    const reg = /[0-9a-z]/gi;
    const ax = /[A-Z]/g;
    const newData = {};
    for (const key in a) {
      let mkey = key;
      if (key.match(ax)) {
        const any = (key.match(reg) || []).map((item, sKey) => {
          if (item.match(ax)) {
            return `-${item.toLowerCase()}`;
          }
          return item;
        });
        mkey = any.join('');
      }
      newData[mkey] = Number(a[key]) ? `${Number(a[key])}px` : a[key];
    }
    return newData;
  },
  ...baseData,
};
