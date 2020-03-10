/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-18 09:56:19
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-02-18 09:56:20
 */
export default {
  getId(length: number = 36) {
    return Number(
      Math.random()
        .toString()
        .substr(3, length) + Date.now(),
    ).toString(36);
  },
};
