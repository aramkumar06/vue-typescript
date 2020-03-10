/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-15 10:14:39
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-15 10:43:43
 */
const data = {
  method: '',
  url: 'http://192.168.168.133/api/${name}/${name2}',
  header: {},
  reqBody: {}, // 传递给后台的
  resBody: {
    // 返回给前端的
  },
};

const promist = [1, 2, 3, 4, 5];
Promise.all(promist).then((res) => {});

Promise.resolve({ data: promist }).then((res) => {});
